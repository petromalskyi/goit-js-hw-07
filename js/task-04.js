const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    const result = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(result);
    reset();
  }

  function reset() {
    evt.currentTarget.elements.email.value = '';
    evt.currentTarget.elements.password.value = '';
  }
}
