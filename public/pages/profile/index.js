import template from './template.js'


const render = (user)  => {
  const container = document.createElement('div');

  container.innerHTML = template(user);

  return container;
}

const init =  () => {
  let btEdit = document.querySelector('.btEdit')
  btEdit.addEventListener('click', (ev) => {
    console.log('EDIT', ev.target.parentElement);
    let inputEdit = ev.target.parentElement.querySelector('input[name=inputEdit]')
    inputEdit.style.display = "block";
    inputEdit.focus();
  });

  let changeBlur = (ev) => {
    console.log('Change', ev.target.parentElement);
    let value = ev.target.value
    if ( value != '') {
      var query = firebase.firestore().collection('users').where('user_uid', '==', firebase.auth().currentUser.uid)
      query.get().then(function(users) {
        users.forEach(function(user) {
          user.ref.update({ name: value }).then(() => {
            ev.target.parentElement.querySelector('.userName').innerHTML = value
            ev.target.style.display = "none";
            ev.target.value = '';
          });
        });
      });
    } else {
      ev.target.style.display = "none";
    }
  }
  document.querySelector('input[name=inputEdit]').addEventListener('change', changeBlur);
  document.querySelector('input[name=inputEdit]').addEventListener('blur', changeBlur);



  document.querySelector('.imgPhoto').addEventListener('click', (ev) => {
    console.log('IMG PHOTO');


  });
  

  // var query = firebase.firestore().collection('users').where('user_uid', '==', firebase.auth().currentUser.uid)
  // query.get().then(function(users) {
  //   users.forEach(function(user) {
  //     console.log(user.data());
  //     user.ref.update({ name: 'karininha', photo:'' });
  //   });
  // });
}
export default {
  render,
  init,
}