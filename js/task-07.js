const refs = {
  inputRange: document.querySelector('#font-size-control'),
  spanText: document.querySelector('#text'),
};

refs.inputRange.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  refs.spanText.style.fontSize = event.currentTarget.value + 'px';
}
