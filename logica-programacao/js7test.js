// test 1
// var n = parseFloat(prompt('Digite um número'));

// for (i = 0; i <= 100; i++) {
//   document.write(n + ' x ' + i +' = ' + (n * i) + '<br />');

//   if (i % 10 === 0 && i > 0) {
//     document.write('<hr />')
//   }
//   i += 1; 
// }

// test 2
// var ano = 1004;
// while (ano <= 2019) {
//   document.write(ano + '<br />');
//   ano += 4;
// }

// test 3
var ano = 1004;
while (ano <= 2019) {
  if (!(ano % 100 === 0) || (ano % 400 === 0)) {
    document.write(ano + '<br />');
  } else {
    document.write(ano + ' Não é bissexto <br />')
  }

  ano += 4;
}
