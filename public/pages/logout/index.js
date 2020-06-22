const render = ()  => {
  const container = document.createElement('div');

  container.innerHTML = '';

  return container;
}

const init =  () => {
    firebase.auth().signOut().then(function() {
      window.location.hash = '#login';
    }).catch(function(error) {
      window.location.hash = '#login';
    });
}

export default {
  render,
  init,
}