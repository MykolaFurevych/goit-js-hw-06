const decrementEl = document.querySelector('button[data-action="decrement"]')
const incrementEl = document.querySelector('button[data-action="increment"]')
const valueCount = document.querySelector('#value')
let counterValue = 0;

const decrement = () => {
  counterValue -= 1
  valueCount.textContent = counterValue;
};

const increment = () => {
  counterValue += 1
  valueCount.textContent = counterValue;
};

decrementEl.addEventListener('click', decrement);
incrementEl.addEventListener('click', increment);
