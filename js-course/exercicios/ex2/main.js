function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fAno = document.getElementById('txtano')
  let res = document.querySelector('#res')

  if (fAno.value.length == 0 || parseInt(fAno.value) > ano ) {
    alert('ERROR! Verifique os dados e tente novamente!')
  } else {
    let sex = document.getElementsByName('sex')
    let idade = ano - Number(fAno.value)
    let genero = ''
    let img = document.createElement('img')

    img.setAttribute('id', 'imagem')

    if (sex[0].checked) {
      genero = 'Homem'

      if (idade >= 0 && idade < 14) {
        // criança
        img.setAttribute('src', 'kid-m.jpg')
      } else if (idade < 30) {
        // jovem
        img.setAttribute('src', 'boy.jpg')
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', 'adult-m.jpg')
      } else {
        // idoso
        img.setAttribute('src', 'elder-m.jpg')
      }
    } else if (sex[1].checked) {
      genero = 'Mulher'

      if (idade >= 0 && idade < 14) {
        // criança
        img.setAttribute('src', 'kid-f.jpg')
      } else if (idade < 21) {
        // jovem
        img.setAttribute('src', 'girl.jpg')
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', 'adult-f.jpg')
      } else {
        // idoso
        img.setAttribute('src', 'elder-f.jpg')
      }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `${genero} de ${idade} anos.`
    res.appendChild(img)
  }
}