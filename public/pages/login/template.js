const template = `
<div id="message" class="container">
  <section>
    <section class="login">
        <img alt="logo" class="control-logo" src="imagens/logo.png"/>
        <img alt="logo-name" class="name-logo" src="imagens/logo-name.png"/>
        <label for="email" class="email-login">email</label>
        <input type="text" id="email" name="email-login" class="email-input">
        <label for="password" class="password-login">senha</label>
        <input type="password" id="password" name="password" class="password-input">
        <span id="loginError"></span>
        <button id="login" class="button-log-in">entrar</button>
        <p>entrar com</p>
        <button id="loginFacebook" class="button">
        <img src="imagens/icons-facebook.png" class="login-facebook"/>
        </button>
        <button id="loginGoogle" class="button">
          <img src="imagens/icons-google-01.png" class="login-google"/>
        </button>
        <section>
          <p>Não tem uma conta? </p>
          <a href="#register">criar conta</a>
        <section>
    <section>
  </section>

</div>
`;
export default template;