function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('img')
  var date =  new Date()
  var time = date.getHours()

  msg.innerHTML = `Agora são ${time} horas.`

  if (time >= 0 && time < 12) {
    // morning
    img.src = 'morning.jpg'
    document.body.style.background = "#bfc6cb"
  } else if (time >= 12 && time <=18) {
    // afternoon
    img.src = 'afternoon.jpg'
    document.body.style.background = "#a56965"
  } else {
    // night
    img.src = 'night.jpg'
    document.body.style.background = "#364552"
  }
}