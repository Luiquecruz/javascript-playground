let num = [5, 8, 2, 9, 3]
let position = num.indexOf(3)

if (position == -1) {
  console.log('Valor não encontrado!')
} else {
  console.log(`O valor está na posição ${position}`)
}

// for (let pos = 0; pos < num.length; pos++) {
//   console.log(num[pos])
// }

for (let pos in num) {
  console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)