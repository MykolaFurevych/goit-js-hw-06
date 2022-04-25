

const inputEl = document.querySelector('#validation-input');
    inputEl.addEventListener('blur', function () {
  if (this.dataset.length === this.value.length) {
    this.classList.add('valid');
    this.classList.remove('invalid');
  } else {
    this.classList.add('invalid');
  };
});