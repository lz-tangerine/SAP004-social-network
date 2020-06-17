import template from './template.js'

const saverUserData = () => {
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const status = document.getElementById('status');
  const date = document.getElementById('date');
  const user = {
    name: name.value,
    surname: surname.value,
    status: status.value,
    date: date.value,
    user_uid: firebase.auth().currentUser.uid,
  };
  firebase.firestore().collection('users').add(user);
};

const create = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('password-confirm').value;
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;

  if (name === '' || surname === '' || email === '' || password === '') {
    loginError.innerHTML = 'Preencha os campos em branco';
  } else if (password !== passwordConfirm) {
    loginError.innerHTML = 'Senha inválida';
  } else if (password.length < 6) {
    loginError.innerHTML = 'A senha deve possuir ao menos 6 caracteres';
  } else if (password === passwordConfirm) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((teste) => {
      console.log(teste);
      saverUserData();
      window.location = '#login';
    }).catch((error) => {
      const errorCode = error.code;
      console.log(error);
      
    });
  }
};

const render = ()  => {
  const container = document.createElement('div');
  container.innerHTML = template;
  return container;
}

const init = () => {
  const registerButton = document.getElementById('register');
  console.log(registerButton)
  registerButton.addEventListener('click', create);
};

export default {
  render, 
  init,
}