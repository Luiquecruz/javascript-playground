function tabuada() {
  let num = document.querySelector('#txtN')
  let tab = document.querySelector('#selTab')

  if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
    let n = Number(num.value)
    let i = 1
    tab.innerHTML = ''
    
    // shoud be in promisse in order to work properly... or not!
    // if (n <= 0) {
    //   window.alert('Por favor, digite um número positivo maior que 0!')
    //   tab.innerHTML = ''
    // }

    for (i = 0; i <= 10; i++) {
      let item = document.createElement('p')
      item.innerHTML = `${n} x ${i} = ${n * i}`
      tab.appendChild(item)
    }

    // Alternate while solution
    //
    // while (i <= 10) {
    //   let item = document.createElement('strong br')
    //   item.innerHTML = `${n} x ${i} = ${n * i}`
    //   tab.appendChild(item)
    //   i++
    // }
  }
}