import routes from './routes.js';

const pageContainer = document.getElementById('page-container');

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

const router = () => {
  window.addEventListener('load', () => {
    renderPage();
  });
  init();
};

// eslint-disable-next-line eol-last
export default router;