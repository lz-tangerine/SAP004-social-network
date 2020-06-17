import routes from './routes.js';

const pageContainer = document.getElementById('page-container');

const validateHash = (hash) => hash === '' ? 'login' : hash.replace('#', '');

const renderPage = () => {
    console.log('RENDER PAGE....');
    pageContainer.innerHTML='';
    const page = validateHash(window.location.hash);
    const route = routes[page];
    if (page != 'login' && page != 'register') {
        console.log('PAGE..', page);
        firebase.auth().onAuthStateChanged(function (userAuth) {
            if (userAuth) {
                firebase.firestore().collection('users')
                 .doc(userAuth.uid).get()
                 .then(user => {
                    console.log('USER>..', userAuth.uid, user.data());
                    pageContainer.appendChild(route.render(user.data()));
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

const router = () => {
    window.addEventListener('load', () => {
        console.log('load');
        renderPage();
    });
    window.addEventListener('hashchange', () => {
        console.log('hash code');
        renderPage();
    })
}

export default router;
