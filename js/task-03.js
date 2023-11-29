const targetInput = document.querySelector('#name-input');
targetInput.addEventListener('input', onInput);

const spanEl = document.querySelector('#name-output');

function onInput(evt) {
  if (evt.currentTarget.value.trim() === '') {
    spanEl.textContent = 'Anonymous';
  } else {
    spanEl.textContent = evt.currentTarget.value.trim();
  }
}
