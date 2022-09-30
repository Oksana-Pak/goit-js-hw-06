const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

const outputContent = refs.outputName.textContent;

refs.inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.inputName.value
    ? (refs.outputName.textContent = event.currentTarget.value)
    : (refs.outputName.textContent = outputContent);
}
