let counterValue = 0;
const refs = {
  Btn: document.querySelectorAll('#counter button'),
  spanCounter: document.querySelector('#value'),
};

refs.Btn[0].addEventListener('click', decrementCounter);
refs.Btn[1].addEventListener('click', incrementCounter);

function decrementCounter() {
  counterValue -= 1;
  refs.spanCounter.textContent = counterValue;
}
function incrementCounter() {
  counterValue += 1;
  refs.spanCounter.textContent = counterValue;
}
