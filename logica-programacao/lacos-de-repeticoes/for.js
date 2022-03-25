var numero = parseFloat(prompt('Digite um número'));
var indice = 1;

for (var i = 0; i <= 1000; i++) {
  document.write(numero + ' x ' + i + ' = ' + (numero * i) + '<br />');
  i += 1;
}

// while(indice <= 1000) {
//   document.write(numero + ' x ' + indice +' = ' + (numero * indice) + '<br />');
//   indice += 1;
// }

// quando precisa ser executado ao menos uma vez

// do {
//   document.write(numero + ' x ' + indice +' = ' + (numero * indice) + '<br />');
//     indice += 1;
// } while (indice <= 1000)

document.write('saiu do loop!')