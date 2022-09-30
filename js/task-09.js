const refs = {
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
};

refs.btn.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = refs.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
