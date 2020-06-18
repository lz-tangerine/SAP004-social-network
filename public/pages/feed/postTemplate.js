
const showDelete = (currentUser, userId, id) => {
    if (userId === currentUser) {
        return `<img src="imagens/lixo-01.png" id="delete-${id}" data-id="${id}" class="delete"/>`
    }

    return ''
}

const postTemplate = ({ userId, userName, text, likes, id, currentUser, user}) => {
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
                    <img src="imagens/comentar.png" id="comentar" class="comentar-feed"/>
                    <img src="imagens/calendar.png" id="calendar" class="calendar-feed"/>
                    <img src="imagens/compartilhar.png" id="compartilhar" class="compartilhar-feed"/>
                </div>
            </div>
        </div>`
}

export default postTemplate;