import routes from './routes.js';

const pageContainer = document.getElementById('page-container');

const validateHash = (hash) => hash === '' ? 'login' : hash.replace('#', '');

const init = () => {
    window.addEventListener('hashchange', () => {
        renderPage();
    })
}

const renderPage = () => {
    pageContainer.innerHTML='';
    const page = validateHash(window.location.hash);
    const route = routes[page];
    pageContainer.appendChild(route.render());
    route.init()
}

const router = () => {
    window.addEventListener('load', () => {
        renderPage();
    })
    init();
}

export default router;
