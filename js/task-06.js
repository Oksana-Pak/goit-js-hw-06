const refsInput = document.querySelector('#validation-input');

refsInput.addEventListener('blur', onInputValidation);

function onInputValidation() {
  if (refsInput.value.length === 6) {
    refsInput.classList.add('valid');
    refsInput.classList.remove('invalid');
  } else {
    refsInput.classList.add('invalid');
    refsInput.classList.remove('valid');
  }
}
