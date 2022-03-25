var n1 = parseFloat(prompt('Jogador 1: digite um número:'));

var n2 = parseFloat(prompt('Jogador 2: digite outro número:'));

if (n1 === n2) {
  alert('Empate!');
} else {
  var sort = parseInt(Math.random() * 2);

  if (sort === 0) {
    if (n1 < n2) {
      alert('Jogador 1 ganhou!');
    } else {
      alert('Jogador 2 ganhou!');
    }
  } else {
    if (n1 > n2) {
      alert('Jogador 1 ganhou!');
    } else {
      alert('Jogador 2 ganhou!');
    }
  }
}