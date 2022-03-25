var numero = parseFloat(prompt('Digite um número'));
var indice = 1;

while (indice <= 100) {
  document.write(numero + ' x ' + indice + ' = ' + (numero * indice) + '<br />');
  if (indice % 10 === 0) {
    document.write('<hr />');
  }

  indice += 1;
}