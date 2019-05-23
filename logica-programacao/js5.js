var n1 = parseFloat(prompt('Jogador 1: digite um número:'));

var n2 = parseFloat(prompt('Jogador 2: digite outro número:'));

var media = (n1 + n2) / 2;

if (n1 > 0 && n2 > 0 && media >= 5) {
  alert('aprovado');
} else {
  alert('reprovado');
}