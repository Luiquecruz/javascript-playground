for (var i = 0; i <= 100; i++) {
  let store = '';

  if (i % 3 === 0) {
    store += 'Fizz';
  }

  if (i % 5 === 0) { 
	store += 'Buzz';
  }

  console.log(store || i);
}