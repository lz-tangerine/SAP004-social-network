const template = `
  <section class="login container">
      <img alt="logo" class="control-logo" src="imagens/logo.png"/>
      <img alt="logo-name" class="name-logo" src="imagens/logo-name.png"/>
      <div>
        <label for="email" class="email-login">email</label>
        <input type="text" id="email" name="email-login" class="email-input">
      </div>
      <div>
        <label for="password" class="password-login">senha</label>
        <input type="password" id="password" name="password" class="password-input">
      </div>
      <span id="loginError" class="error"></span>
      <button id="login" class="button-log-in">entrar</button>
      <div class="network-social">
      <p class="enter-with">entrar com</p>
      <div class="img-social">
        <img src="imagens/icons-facebook.png" id="loginFacebook" class="login-facebook"/>
        <img src="imagens/icons-google-01.png" id="loginGoogle" class="login-google"/>
      </div>
      <div class="create">
        <p class="create">Não tem uma conta?</p>
        <a href="#register" class="link-create">criar conta</a>
      </div>
  </section>
`;
export default template;