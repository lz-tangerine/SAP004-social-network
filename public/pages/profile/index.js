import template from './template.js'


const render = (user)  => {
  const container = document.createElement('div');

  container.innerHTML = template(user);

  return container;
}

const init =  () => {

  var query = firebase.firestore().collection('users').where('user_uid', '==', firebase.auth().currentUser.uid)
  query.get().then(function(users) {
    users.forEach(function(user) {
      console.log(user.data());
      user.ref.update({ name: 'karininha', photo:'' });
    });
  });
}
export default {
  render,
  init,
}