const fizzBuzz = (number) => {
  let arr = [];

  for (let i = 0; i <= number; i++) {
    if (i % 6 === 0) arr.push('FizzBuzz')
    else if (i % 2 === 0) arr.push('Fizz')
    else if (i % 3 === 0) arr.push('Buzz')
    else arr.push(i)
  }

  return arr;
}

console.log(fizzBuzz(44))