const loginUser = document.querySelector('.login');
const passUser = document.querySelector('.senha');
const loginBtn = document.querySelector('.acesso');

loginBtn.addEventListener('click', () => {
  console.log(loginUser.value);
  console.log(passUser.value);

  if (loginUser.value === 'tryber@betrybe.com' && passUser.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
});

const title = document.getElementById('trybewarts-header-title');
title.innerText = 'Trybewarts';
