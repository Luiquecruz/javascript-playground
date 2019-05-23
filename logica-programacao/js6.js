var num = parseInt(prompt('digite um número'));

var name = prompt('digite seu nome');
var size = name.length;

switch(size) {
  case (1):
    alert('oi');
    break;
  case (2):
    alert('ola')
    break;
  case (3):
    alert('hi')
    break;
  default:
    alert('nah')
}

switch(num) {
  case "1":
    alert('string')
    break;
  case 2:
    alert('number');
    break;
}