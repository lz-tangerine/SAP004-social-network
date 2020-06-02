export const createUser = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        window.location = '#';
    })
}