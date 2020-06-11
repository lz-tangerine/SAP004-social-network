import template from './template.js'
import postTemplate from './postTemplate.js'

const render = ()  => {
    const container = document.createElement('div');

    container.innerHTML = template;

    return container;
}

const createPost = () => {
    const text = document.getElementById('postText').value
    const userId = firebase.auth().currentUser.uid
    const post = {
        text,
        userId,
        likes:0,
    }
    firebase.firestore().collection('posts').add(post);
}

const showFeed = () => {
    const timeline = document.getElementById('timeline')
    firebase.firestore().collection("posts")
    .onSnapshot(function(querySnapshot) {
        var posts = [];
        querySnapshot.forEach(function(doc) {
            posts.push(doc.data());
        });
        
        const content = posts.map(postTemplate)
        timeline.innerHTML = content;
    });
}
    

const init =  () => {
    console.log('incializaou')
    const postButton = document.getElementById('createPost');
    postButton.addEventListener('click', createPost);
    showFeed();
    
}

export default {
    render,
    init,
}