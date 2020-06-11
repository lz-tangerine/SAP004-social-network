const template = `
<section class="login container">
    <header class="header">
        <div>
            <input id="menu-hamburguer" type="checkbox" class="menu-btn"/>
            <label for="menu-hamburguer" class="menu-icon"><span class="nav-icon"></span></label>
            <ul class="menu">
                <li><a href="#perfil" class="menu-item">Perfil</a></li>
                <li><a href="#páginas" class="menu-item">Páginas</a></li>
                <li><a href="#grupos" class="menu-item">Grupos</a></li>
                <li><a href="#calendário" class="menu-item">Calendário</a></li>
                <li><a href="#chat" class="menu-item">Chat</a></li>
                <li><a href="#sair" class="menu-item">Sair</a></li>
            </ul>
        </div>
        <div>
            <img alt="logo-nav" class="name-logo" src="imagens/logo-name.png"/>
        </div>
    </header>

    <main class="feed-post">
        <img src="imagens/astronautrosie.jpg" alt="" class="foto-perfil">
        <div class="name-perfil">
            <p id="userId" class="user-perfil">Player 1</p>
            <p id="typeGame" class="type-person">Jogos Plataforma</p>
        </div>
        <section class="post-feed">
            <textarea type="text" id="postText" name="postText" class="post"></textarea> 
            <div class="button-post">
                <img src="imagens/foto.png" class="img-photo"/>
                <button id="createPost" class="play">Play!</button>
            </div>
        </section>
    </main>

        <section class="feed">
            <div class="feed-pessoal">
                <img src="imagens/astronautrosie.jpg" alt="" class="foto-feed">
                <div class="name-perfil">
                    <p id="userId" class="user-post">Player 1</p>
                </div>
            </div>
            <div id="timeline"></div>
                <img src="imagens/like-01.png" id="like" class="like-feed"/>
                <img src="imagens/comentar.png" id="comentar" class="comentar-feed"/>
                <img src="imagens/calendar.png" id="calendar" class="calendar-feed"/>]
                <img src="imagens/compartilhar.png" id="compartilhar" class="compartilhar-feed"/>
            </div>
        </section>

        <section class="post-like">
            <div class="feed-outher">
                    <img src="imagens/astronautrosie.jpg" alt="" class="foto-feed">
                    <div class="name-perfil">
                        <p id="userId" class="user-outher">Player 2</p>
                    </div>
            </div>
                <textarea id="story" name="story" rows="5" cols="33">Estou pensando...</textarea>
            <div>
                <img alt="like" class="like" src="imagens/like-01.png"/>
                <button id="compartilhar" class="compart">compartilhar</button>
            </div>
        </section>
</section>
`;
export default template;