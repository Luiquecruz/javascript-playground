const calculateImc = () => {
  let getContainer = document.querySelector('#imcContainer')

  // get fields
  let getAltura = document.querySelector('#alturaVal').value
  let getPeso = document.querySelector('#pesoVal').value

  // validations
  if (!getAltura.trim().length || getAltura == 0) return alert(`O campo Altura está vazio ou inválido`)
  if (!getPeso.trim().length || getPeso == 0) return alert(`O campo Peso está vazio ou inválido`)

  // normalize entries
  getAltura.replace(',', '.')
  getPeso.replace(',', '.')

  // calculate
  const imc = Math.abs(getPeso / Math.pow(getAltura, 2)).toFixed(1)

  return getContainer.innerHTML = `
    <hr />
    <p>Seu IMC é de: <span>${imc}</span></h>
  `
}