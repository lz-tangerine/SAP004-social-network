const template = `
<section class="container">
        <img alt="logo" class="register" src="imagens/logo.png"/>
        <img alt="logo-name" class="register" src="imagens/logo-name.png"/>
    <section class="container-register">
        <div>
            <h2>Criar conta</h2>
        </div>
        <div>
            <label for="email" class="email-register">email</label>
            <input type="text" id="email" name="email-login" class="input">
        </div>
        <div>
            <label for="password-register" class="password-register">senha</label>
            <input type="password" id="password-register" name="password" class="input">
        </div>
        <div>
            <label for="confirm-password" class="password-confirm">confirmar senha</label>
            <input type="password" id="password" name="password" class="input">
        </div>
        <div>
            <label for="name" class="name">Nome</label>
            <input type="text" id="name" class="input">
        </div>
        <div>
            <label for="surname" class="surname">Sobrenome</label>
            <input type="text" id="surname" class="input">
        </div>
        <div>
            <label for="nickname" class="nickname">Apelido</label>
            <input type="text" id="nickname" class="input">
        </div>
        <div>
            <label for="date" class="date">Data de nascimento</label>
            <input type="date" id="date" class="input">
        </div>
        <div>
            <label for="state" class="state">Estado</label>
            <input type="text" id="state" class="input">
        </div>
        <div class="radio-gender">
            <label for="gender" class="gender">Como você se identifica?</label>
            <input type="radio" id="gender-masc" class="gender-camp">
            <label for="gender-masc">Masculino</label>
            <input type="radio" id="gender-fem" class="gender-camp">
            <label for="gender-fem">Feminino</label>
            <input type="radio" id="gender-outher" class="gender-camp" valor="outher">
            <label for="gender-outher">Outro</label>
            <input type="text" id="gender-outher" class="gender-camp">
        </div>
        <button id="register" class="register-button">Criar conta</button>
        <a href="#">Voltar para o login</a>
    </section>
</section>

`;

export default template;