function uiConfig() {
    return {
        signInFlow:'popup',
        signInSucessUrl: '#',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ]
    }
}

