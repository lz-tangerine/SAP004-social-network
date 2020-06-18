import routes from './routes.js';

const pageContainer = document.getElementById('page-container');

const validateHash = (hash) => hash === '' ? 'login' : hash.replace('#', '');

const renderPage = () => {
    // console.log('RENDER PAGE....');
    pageContainer.innerHTML='';
    const page = validateHash(window.location.hash);
    const route = routes[page];
    if (page != 'login' && page != 'register' && page != 'updateAccount') {
        // console.log('PAGE..', page);
        firebase.auth().onAuthStateChanged(function (userAuth) {
            if (userAuth) {
                firebase.firestore().collection('users')
                 .where('user_uid', '==', userAuth.uid).get()
                 .then(docs => {
                    if (!docs.empty) {
                        console.log('NOT EMPTY')
                        docs.forEach(function(doc) {
                            pageContainer.appendChild(route.render(doc.data()));
                            route.init();
                        });
                    } else {
                        console.log('USER EMPTY');
                        window.location.hash = '#updateAccount';
                    }
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
        renderPage();
    });
    window.addEventListener('hashchange', () => {
        renderPage();
    })
}

export default router;
