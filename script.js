const email = 'tryber@teste.com';
const pass = '123456';
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const buttonInput = document.querySelector('#button');

function login() {
  if (loginInput.value === email && passwordInput.value === pass) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonInput.addEventListener('click', login);
