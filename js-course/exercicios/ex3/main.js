function contar() {
  let ini = document.getElementById('txtI')
  let fim = document.getElementById('txtF')
  let passo = document.getElementById('txtP')
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('Error, Faltam dados!')
    res.innerHTML = 'Impossível contar! Faltam dados!'
  } else {
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p === 0) {
      p += 1
    }
    
    res.innerHTML = 'Contando: <br>'

    if (i < f) {
      for (let c = i; c <= f; c += p) {

        res.innerHTML += ` ${c} \u{1F44F}`
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F44F}`
      }
    }

    res.innerHTML += ` <br> \u{1F64C} UHUuuUuUull!!!`
  }
}