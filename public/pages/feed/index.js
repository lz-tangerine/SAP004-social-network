import template from './template.js'
import postTemplate from './postTemplate.js'

const render = ()  => {
  const container = document.createElement('div');

  container.innerHTML = template;

  return container;
  }

const createPost = () => {
  const text = document.getElementById('postText').value
  const privatePost = document.getElementById('private').checked
  const userId = firebase.auth().currentUser.uid
  const userName = firebase.auth().currentUser.displayName
  const post = {
    text,
    userId,
    userName,
    likes:0,
    private: privatePost,
    created: new Date(),
  }
  firebase.firestore().collection('posts').add(post);
}

const likePost =() => {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).get()
  .then((post) => {
    const likes = post.data().likes + 1;
    firebase.firestore().collection('posts').doc(id).update({
      likes,
    });
  });
}

const deletePost = (event) => {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
}

const addDeleteEvent = (post) => {
  const deleteButton = document.getElementById(`delete-${post.id}`)
  if (deleteButton) {
    deleteButton.addEventListener('click', deletePost)
  }
}

const addLikeEvent = (post) => {
  const likeButton = document.getElementById(`like-${post.id}`)
  likeButton.addEventListener('click', likePost)
}

const addEvents = (post) => {
  addLikeEvent(post);
  addDeleteEvent(post);
}


const showFeed = () => {
  const currentUser = firebase.auth().currentUser.uid
  const timeline = document.getElementById('timeline')
  firebase.firestore().collection("posts").orderBy('created', 'desc')
  .onSnapshot(function(querySnapshot) {
    var posts = [];
    querySnapshot.forEach(function(doc) {
      const post = doc.data()
      post.id = doc.id
      post.currentUser = currentUser
      posts.push(post);
    });
    
    const content = posts.map(postTemplate)
    timeline.innerHTML = content.join('');
    posts.forEach(addEvents)
  });
}

const init =  () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('incializaou')
      const postButton = document.getElementById('createPost');
      postButton.addEventListener('click', createPost);
      showFeed();
    }
    });
}

export default {
  render,
  init,
}