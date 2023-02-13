// Toast notification
function createToast(type, message, timer) {
  const holder = document.querySelector("#toast-holder")

  let types = [ // 0 = success | 1 = error | 2 = warning
    'bg-green-300',
    'bg-red-300',
    'bg-orange-300'
  ]

  const toastContent = `
    <div id="toast" class="flex w-full mb-4 py-4 px-6 text-gray-700 ${types[type]}">
      ${ message }
    </div>
  `

  holder.insertAdjacentHTML('afterbegin',toastContent)

  setTimeout(() => document.querySelector('#toast').remove(), timer)
}

function clearFields() {
  document.querySelector('#firstName').value = ''
  document.querySelector('#lastName').value = ''
  document.querySelector('#rollNo').value = ''
}

// Create
function addEntry() {
  document.querySelector('#entryForm').addEventListener('submit', (e) => {
    e.preventDefault()

    document.querySelector('#firstName').value
    document.querySelector('#lastName').value
    document.querySelector('#rollNo').value
  })
}

// Delete
document.querySelector('#delete').addEventListener('click', (e) => {
  e.target.parentElement.parentElement.remove()
  createToast(0, 'The item has been deleted!', 5000)
})
