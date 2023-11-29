const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const divEl = document.querySelector('#boxes');

inputEl.addEventListener('input', onInput);
buttonCreateEl.addEventListener('click', onClickCreate);
buttonDestroyEl.addEventListener('click', onClickDestroy);

let amount = 0;

function onInput(event) {
  if (event.currentTarget.value >= 1 && event.currentTarget.value <= 100) {
    amount = event.currentTarget.value;
  } else {
    amount = 0;
  }
}

function onClickCreate(event) {
  if (amount >= 1 && amount <= 100) {
    reset();
    createBoxes(amount);
    amount = 0;
  }
}

function createBoxes(amount) {
  console.log('createbox', amount);
  onClickDestroy();
  let markUp = '';
  let sizeBox = 30;
  for (let i = 1; i <= amount; i += 1) {
    markUp += `<div style="width: ${String(sizeBox)}px; height:  ${String(
      sizeBox,
    )}px; background-color: ${getRandomHexColor()}"></div>`;
    sizeBox += 10;
  }
  divEl.insertAdjacentHTML('afterbegin', markUp);
}

function onClickDestroy(event) {
  divEl.innerHTML = '';
  inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function reset() {
  inputEl.value = '';
}
