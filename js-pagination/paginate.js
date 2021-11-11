const populateList = () => {
  const list = document.querySelector('#paginate .list')

  const data = Array.from({ length: 100 }).map((_, i) => {
    return `<div class="item">Item ${ i + 1}</div>`
  });

  list.innerHTML = data.join('');

  return data;
};

const data = populateList();

const state = {
  page: 1,
  perPage: 10,
  totalPages: data.length / 10,
};

const controls = {
  next() {
    state.page++;
  },
  prev() {},
  goTo() {}
};

/*
 continue controls functionality
*/
