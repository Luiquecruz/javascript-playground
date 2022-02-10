// this functions should represent backend data
const populateList = () => {
  const list = document.querySelector('#paginate .list')

  const data = Array.from({ length: 100 }).map((_, i) => {
    return `<div class="item">Item ${i + 1}</div>`;
  });

  list.innerHTML = data.join('');

  return data;
};

const data = populateList();
// end

let perPage = 6;

const state = {
  page: 1,
  perPage,
  totalPages: Math.ceil(data.length / perPage)
};

// helper to get element by selector
const element = {
  get(el) {
    return document.querySelector(el);
  }
};

const controls = {
  next() {
    state.page++;

    if (state.page > state.totalPages) {
      state.page--;
    }
  },
  prev() {
    if (state.page > 1) {
      state.page--;
    }
  },
  goTo(page) {
    if (page < 1) {
      page = 1;
    }

    state.page = page;

    if (page > state.totalPages) {
      state.page = state.totalPages;
    }
  },
  createListeners() {
    element.get('.first').addEventListener('click', () => {
      controls.goTo(1);
      console.log(state.page);
    });

    element.get('.prev').addEventListener('click', () => {
      controls.prev();
      console.log(state.page);
    });

    element.get('.next').addEventListener('click', () => {
      controls.next();
      console.log(state.page);
    });

    element.get('.last').addEventListener('click', () => {
      controls.goTo(state.totalPages);
      console.log(state.page);
    });
  }
};

function update() {
  console.log('update')
}

function init() {
  controls.createListeners();
}
