import routes from './routes.js';

const pageContainer = document.getElementById('page-container');

<<<<<<< HEAD
const validateHash = (hash) => hash === '' ? 'login' : hash.replace('#', '');

const renderPage = () => {
  // console.log('RENDER PAGE....');
  pageContainer.innerHTML='';
  const page = validateHash(window.location.hash);

  const route = routes[page];
  if (page != 'login' && page != 'register' && page != 'logout') {
    firebase.auth().onAuthStateChanged(function (userAuth) {
      if (userAuth) {
        firebase.firestore().collection('users')
          .where('user_uid', '==', userAuth.uid).get()
          .then(docs => {
            let doc = {};
            docs.forEach(function(d) {
              doc = d.data();
            });
            pageContainer.innerHTML='';
            pageContainer.appendChild(route.render(doc));
            route.init();
          });
      } else {
        console.log('erro redirect login');
        window.location.hash = '#login';
      }
    });
  } else {
    pageContainer.appendChild(route.render());
    route.init();
  }
}
=======
const validateHash = hash => (hash === '' ? 'login' : hash.replace('#', ''));

const renderPage = () => {
  pageContainer.innerHTML = '';
  const page = validateHash(window.location.hash);
  pageContainer.appendChild(routes[page]);
};

const init = () => {
  window.addEventListener('hashchange', () => {
    renderPage();
  });
};
>>>>>>> 81c0afaab8b23b97cf551b408d15e09a64dd9108

const router = () => {
  window.addEventListener('load', () => {
    renderPage();
  });
<<<<<<< HEAD
  window.addEventListener('hashchange', () => {
    renderPage();
  })
}
=======
  init();
};
>>>>>>> 81c0afaab8b23b97cf551b408d15e09a64dd9108

// eslint-disable-next-line eol-last
export default router;