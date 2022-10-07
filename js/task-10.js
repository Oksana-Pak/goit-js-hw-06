const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', () => insertBoxes(refs.input.value));
refs.destroyBtn.addEventListener('click', destroyBoxes);

function insertBoxes(amount) {
  destroyBoxes();
  createBoxes(amount);
}

function createBoxes(amount) {
  const divArray = [];
  let sizeValue = 30;

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${sizeValue}` + 'px';
    divEl.style.height = `${sizeValue}` + 'px';
    divEl.style.backgroundColor = getRandomHexColor();

    sizeValue += 10;

    divArray.push(divEl);
  }
  refs.boxes.append(...divArray);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
