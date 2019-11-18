oddEven(7)

sum(3, 4)

console.log(fatorial(7))

function oddEven(n) {
  let val = Number(n)

  if(val % 2 == 0) {
    console.log(`${val} is even`)
  } else {
    console.log(`${val} is odd`)
  }
}

function sum(n1=0, n2=0) {
  let result = Number(console.log(n1 + n2))

  return result
}

// function fatorial(n) {
//   let fat = 1

//   for(let c = n; c > 1; c--) {
//     fat *= c
//   }

//   return console.log(fat);
// }

function fatorial(n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorial(n-1)
  }
}