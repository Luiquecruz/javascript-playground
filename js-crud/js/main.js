'use strict'

// LocalStorage helpers
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? []
const setLocalStorage = (key, payload) => localStorage.setItem(key, JSON.stringify(payload))


// CRUD functions
const createClient = (client) => {
  const db_client = getLocalStorage('db_client')
  db_client.push(client)
  setLocalStorage('db_client', db_client)
}

const readClient = () => getLocalStorage('db_client')

const updateClient = (client, index) => {
  const db_client = readClient()
  db_client[index] = client
  setLocalStorage(db_client)
}

const deleteClient = (index) => {
  const db_client = readClient()
  db_client.splice(index, 1)
  setLocalStorage('db_client', db_client)
}

// Form validation
const isValidated = () => {
  return document.querySelector('#form').reportValidity()
}

const clearForm = () => {
  const fields = document.querySelectorAll('#form input');

  fields.forEach(field => {
    field.value = null
    field.dataset.state = 'new'
  })
}

const setNodeIndex = (item, i) => {
  if (item[i].dataset.state) {
    this.dataset.state = `node-${i}`
  }
}

// DOM functions
const saveClient = () => {
  if (!isValidated()) return console.error('invalid form data')

  const client = {
    nome: document.querySelector('#nome').value,
    email: document.querySelector('#email').value,
    telefone: document.querySelector('#telefone').value,
    cidade: document.querySelector('#cidade').value,
  }

  const clientFieldState = document.querySelectorAll('#form .modal-field input')
  clientFieldState.forEach((field, i) => setNodeIndex(field, i));

  if (clientFieldState) {
    createClient(client)
    closeModal()
    renderData()
  }

  if (!clientFieldState) {
    updateClient(client, clientFieldState)
    closeModal()
    renderData()
  }

  createClient(client)
  closeModal()
  renderData()
}

const recoverFields = (clientStoredData) => {
  document.querySelector('#nome').value = clientStoredData.nome
  document.querySelector('#email').value = clientStoredData.email
  document.querySelector('#telefone').value = clientStoredData.telefone
  document.querySelector('#cidade').value = clientStoredData.cidade
}

const editClient = (i) => {
  const getClientData = readClient()[i]
  getClientData.state = i
  recoverFields(getClientData)
  openModal()
}

const clientActions = (e) => {
  if (e.target.type !== 'button') return

  const [ action, index ] = e.target.id.split('-')

  if (action === 'edit') {
    editClient(index)
  }

  if (action === 'delete') {
    let c = readClient()[index]
    let response = confirm(`Do you want to remove client ${ c.nome }?`)

    if (response) {
      deleteClient(index)
      renderData()
      alert(`${ c.nome } deleted!`)
    }
  }
}

const renderData = () => {
  if (!readClient()) return

  const target = document.querySelector('.records tbody')
  const getData = readClient().map((c, index) => {
    return `
    <tr>
      <td>${ c.nome }</td>
      <td>${ c.email }</td>
      <td>${ c.telefone }</td>
      <td>${ c.cidade }</td>
      <td>
        <button type="button" class="button green" id="edit-${ index }">editar</button>
        <button type="button" class="button red" id="delete-${ index }">excluir</button>
      </td>
    </tr>
  `
  })

  return target.innerHTML = getData.join('')
}

renderData()


// Modal logic
const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => {
  clearForm()
  document.getElementById('modal').classList.remove('active')
}


// Events
document.getElementById('cadastrarCliente')
.addEventListener('click', openModal)

document.getElementById('modalClose')
.addEventListener('click', closeModal)

document.getElementById('cancelar')
.addEventListener('click', closeModal)

document.getElementById('salvar')
.addEventListener('click', saveClient)

document.querySelector('.records tbody')
.addEventListener('click', clientActions)