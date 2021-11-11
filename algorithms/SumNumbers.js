const sumNumbers = number => {
  let result = 0;

  for (let i in number) {
    result += number[i];
  }

  return result;
}

// modern JS solution (but not faster in performance).
// const sumNumbers = number => number.reduce((sum, n) => sum + n)

console.log(sumNumbers([1, 3, 10]));