let counterValue = 0;

const refs = {
  btn: document.querySelectorAll('#counter button'),
  spanCounter: document.querySelector('#value'),
};

refs.btn[0].addEventListener('click', decrementCounter);
refs.btn[1].addEventListener('click', incrementCounter);

function decrementCounter() {
  counterValue -= 1;
  refs.spanCounter.textContent = counterValue;
}
function incrementCounter() {
  counterValue += 1;
  refs.spanCounter.textContent = counterValue;
}
