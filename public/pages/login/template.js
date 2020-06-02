const template = `
<div id="message">
  <section class="container">
    <section class="login">
        <img alt="logo" class="control-logo" src="imagens/logo.png"/>
        <img alt="logo-name" class="name-logo" src="imagens/logo-name.png"/>

        <label for="email">EMAIL</label>
        <input type="text" id="email" name="email-login" class="email-login">
        <label for="password">SENHA</label>
        <input type="password" id="password" name="password" class="password-login">
        <button id="login">entrar</button>
        <span id="loginError"></span>
        <a href="#register">criar conta</a>
    </section>
  </section>
</div>
<div id="firebaseui-auth-container">
</div>
`;
export default template;