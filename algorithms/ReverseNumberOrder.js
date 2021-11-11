const reverseNumberOrder = (input) => {
  let r = Number.parseInt(
    `${input}`.split('').reverse().join('')
  ) * Math.sign(input);

  return r;
}

console.log(reverseNumberOrder(12345))