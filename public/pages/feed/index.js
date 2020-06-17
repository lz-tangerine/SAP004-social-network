import template from './template.js'
import postTemplate from './postTemplate.js'

const render = () => {
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
    likes: 0,
    private: privatePost,
    created: new Date(),
    comments: [],
  }
  firebase.firestore().collection('posts').add(post);
}

const likePost = () => {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).get()
    .then((post) => {
      const likes = post.data().likes + 1;
      firebase.firestore().collection('posts').doc(id).update({
        likes,
      });
    });
}

const commentPost = (id, text) => {
  firebase.firestore().collection('posts').doc(id).get()
    .then((post) => {
      const comments = post.data().comments;
      const userId = firebase.auth().currentUser.uid
      const comment = { text, userId }

      comments.push(comment)
      firebase.firestore().collection('posts').doc(id).update({
        comments,
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

const showCommentButton = (post) => {
  const commentButton = document.getElementById(`comments-${post.id}`)
  commentButton.addEventListener('click', () => {
    const newCommentContainer = document.getElementById(`newCommentContainer-${post.id}`)
    newCommentContainer.classList.toggle('show')
  })
}

const addComment = (post) => {
  const inputEnter = document.getElementById(`addComment-${post.id}`);
  inputEnter.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) { // codigo da tecla enter
      // colocas aqui a tua função a rodar
      commentPost(post.id, inputEnter.value)
    }
  });
}

const addEvents = (post) => {
  addLikeEvent(post);
  addDeleteEvent(post);
  showCommentButton(post);
  addComment(post);
}

const showFeed = () => {
  const currentUser = firebase.auth().currentUser.uid
  const timeline = document.getElementById('timeline')
  firebase.firestore()
    .collection("posts")
    .orderBy('created', 'desc')
    .onSnapshot(function (querySnapshot) {
      var posts = [];
      querySnapshot.forEach(function (doc) {
        const post = doc.data()
        post.id = doc.id
        post.currentUser = currentUser
        if (post.private && post.userId === currentUser) {
          posts.push(post);
        } else if (!post.private) {
          posts.push(post)
        }
      });

      const content = posts.map(postTemplate)
      timeline.innerHTML = content.join('');
      posts.forEach(addEvents)
    });
}

const init = () => {
  console.log('incializaou')
  const postButton = document.getElementById('createPost');
  postButton.addEventListener('click', createPost);
  showFeed();
}

export default {
  render,
  init,
}