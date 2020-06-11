const template = `
<section class="container">
        <img alt="logo" class="register" src="imagens/logo.png"/>
        <img alt="logo-name" class="register" src="imagens/logo-name.png"/>
    <section class="container-register">
        <div>
            <h2>Criar conta</h2>
        </div>
        <div class="content">
            <label for="email" class="email-register">email</label>
            <input type="text" id="email" name="email-login" class="input">
        </div>
        <div class="content">
            <label for="password" class="password-register">senha</label>
            <input type="password" id="password" name="password" class="input">
        </div>
        <div class="content">
            <label for="password-confirm" class="password-confirm">confirmar senha</label>
            <input type="password" id="password-confirm" name="password-confirm" class="input">
        </div>
        <div class="content">
            <label for="name" class="name">Nome</label>
            <input type="text" id="name" class="input">
        </div>
        <div class="content">
            <label for="surname" class="surname">Sobrenome</label>
            <input type="text" id="surname" class="input">
        </div>
        <div class="content">
            <label for="date" class="date">Data de nascimento</label>
            <input type="date" id="date" class="input">
        </div>
        <div class="content">
            <label for="status" class="status">Status Relacionamento</label>
            <input type="text" id="status" class="input">
        </div>
        <div class="radio-gender class="content"">
            <label for="gender" class="gender">Como você se identifica?</label>
            <input type="radio" name="radio" id="gender-masc" class="gender-camp">
            <label for="gender-masc">Masculino</label>
            <input type="radio" name="radio" id="gender-fem" class="gender-camp">
            <label for="gender-fem">Feminino</label>
            <input type="radio" name="radio" id="gender-outher" class="gender-camp" valor="outher">
            <label for="gender-outher">Outro</label>
        </div>
        <button id="register" class="register-button">Criar conta</button>
        <span id="loginError" class="error"></span> 
        <a href="#" class="button-back">Voltar para o login</a>
    </section>
    
</section>  
`;

export default template;