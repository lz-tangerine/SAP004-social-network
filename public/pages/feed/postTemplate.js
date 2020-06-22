
const showDelete = (currentUser, userId, id) => {
  if (userId === currentUser) {
  return `<img src="imagens/lixo-01.png" id="delete-${id}" data-id="${id}" class="delete"/>`
  }

  return ''
}

  const commentTemplate = ({text, userId}) => {
  return`
  <div>
    <div>
      <img src="imagens/astronautrosie.jpg" alt="" class="foto-feed">
      <span class="user-post">${userId}</span>
      <img src="imagens/lixo-01.png"/ class="delete"/>
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
          <img src="imagens/like-01.png" id="like-${id}" data-id="${id}" class="like-feed"/>${likes}
          ${showDelete(currentUser, userId, id)}
        </div>
        <div class="icons-right">
          <img src="imagens/comentar.png" id="comments-${id}" class="comentar-feed"/>
          <img src="imagens/calendar.png" id="calendar" class="calendar-feed"/>
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