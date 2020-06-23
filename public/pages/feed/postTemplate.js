
const showDelete = (currentUser, userId, id) => {
  if (userId === currentUser) {
    return `<img src="imagens/lixo-01.png" id="delete-${id}" data-id="${id}" class="delete"/>`
  }

  return ''
}
const showDeleteComment = (currentUser, userId, id, index) => {
  if (userId === currentUser) {
    return `<img src="imagens/lixo-01.png" id="delete-comment-${id}-${index}" data-id="${id}" data-index="${index}" class="delete-comment"/>`
  }

  return ''
}

const showEditComment = (currentUser, userId, id, index) => {
  if (userId === currentUser) {
    return `<img src="imagens/editar.png" class="edit-comment" id="edit-comment-${id}-${index}" data-id="${id}" data-index="${index}"/>`
  }

  return ''
}



const commentTemplate = (currentUser, postId) => ({ text, userName, userId }, index) => {
  return `
    <div>
      <div class="img-name">
        <img src="imagens/astronautrosie.jpg" alt="" class="foto-comment">
        <span class="user-comment">${userName}</span>
      </div>
      <div class="text-comment">
        <p class="paragraph-comment" id="comment-text-${postId}-${index}" >${text}</p>
      </div>
      <div class="comments">
        ${showDeleteComment(currentUser, userId, postId, index)}
        ${showEditComment(currentUser, userId, postId, index)}
    </div>
    <p class="post-text">${text}</p>
  </div>
  `
  }

const postTemplate = ({ userId, userName, text, likes, id , currentUser, comments, user}) => {
  return `
    <div class="template-feed">
      <div class="feed-pessoal">
        <img src="${user && user.photo ? user.photo : 'imagens/astronautrosie.jpg'}" alt="" class="foto-feed">
        <span class="user-post">${userName}</span>
      </div>
      <div class="itens-text">
        <p class="post-text">${text}</p>
      </div>
      <div class="itens-post">
        <div class="icons-left"> 
          <img src="imagens/like-01.png" id="like-${id}" data-id="${id}" class="like-feed"/>${whoLiked.length}
          ${showDelete(currentUser, userId, id)}
        </div>
        <div class="icons-right">
          <img src="imagens/comentar.png" id="comments-${id}" class="comentar-feed"/>
          <img src="imagens/editar.png" class="edit-post" id="edit-${id}" data-id="${id}"/>
          <img src="imagens/compartilhar.png" id="compartilhar" class="compartilhar-feed"/>
        </div>
        <div id="newCommentContainer-${id}" class="comment-container">
          <div class="comment">
            <img src="imagens/astronautrosie.jpg" alt="" class="foto-comment">
            <input type="text" data-id="${id}" id="addComment-${id}" class="input-comment"/>
          </div>
        </div>
        <div id="newCommentContainer-${id}" class="comment-container show">
          ${comments ? comments.map(commentTemplate).join('') : ''}
        </div>
      </div>
      </div>`
}
export default postTemplate;