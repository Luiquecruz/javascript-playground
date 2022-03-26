// Mocked backend data
const data = Array.from({ length: 100 }).map((_, i) => `Element <strong>${i + 1}</strong>`)

let perPage = 8

const state = {
  page: 1,
  perPage,
  totalPages: Math.ceil(data.length / perPage),
  maxVisibleButtons: 4
}

// get element helper
const element = {
  get(el) {
    return document.querySelector(el)
  }
}

const controls = {
  next() {
    state.page++

    if (state.page > state.totalPages) {
      state.page--
    }
  },
  prev() {
    if (state.page > 1) {
      state.page--
    }
  },
  goTo(page) {
    if (page < 1) {
      page = 1
    }

    state.page = +page

    if (page > state.totalPages) {
      state.page = state.totalPages
    }
  },
  createListeners() {
    element.get('.first').addEventListener('click', () => {
      controls.goTo(1)
      update()
    })

    element.get('.prev').addEventListener('click', () => {
      controls.prev()
      update()
    })

    element.get('.next').addEventListener('click', () => {
      controls.next()
      update()
    })

    element.get('.last').addEventListener('click', () => {
      controls.goTo(state.totalPages)
      update()
    })
  }
}

const list = {
  create(item) {
    const div = document.createElement('div')

    div.classList.add('item')
    div.innerHTML = item
    element.get('.list').appendChild(div)
  },
  update() {
    element.get('.list').innerHTML = ""

    let page = state.page - 1
    let start = page * state.perPage
    let end = start + state.perPage

    const paginated = data.slice(start, end)

    paginated.forEach(list.create)
  }
}

const buttons = {
  newElement: element.get('.controls .numbers'),
  create(paginateBtn) {
    const button = document.createElement('div')

    button.innerHTML = paginateBtn

    if (state.page == paginateBtn) {
      button.classList.add('active')
    }

    button.addEventListener('click', (e) => {
      const page = e.target.innerText
      controls.goTo(page)
      update()
    })

    buttons.newElement.appendChild(button)
  },
  update() {
    const { maxLeft, maxRight } = buttons.calculateMaxVisible()

    buttons.newElement.innerHTML = ""

    for (let page = maxLeft; page <= maxRight; page++) {
      buttons.create(page)
    }
  },
  calculateMaxVisible() {
    const {
      page,
      maxVisibleButtons,
      totalPages
    } = state

    let maxLeft = (page - Math.floor(maxVisibleButtons / 2))
    let maxRight = (page + Math.floor(maxVisibleButtons / 2))

    if (maxLeft < 1) {
      maxLeft = 1
      maxRight = maxVisibleButtons
    }

    if (maxLeft > totalPages) {
      maxLeft = totalPages - (maxVisibleButtons - 1)
      maxRight = totalPages

      if (maxLeft < 1) maxLeft = 1
    }

    return {
      maxLeft,
      maxRight
    }
  }
}

function update() {
  list.update()
  buttons.update()
}

function init() {
  list.update()
  buttons.update()
  controls.createListeners()
}

init()