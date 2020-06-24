const template = `
<form enctype="multipart/form-data">
<section class="container">

    <section class="logo-login">
      <div class="logo">
        <img alt="logo" class="logo-control" src="imagens/logo.png"/>
      </div>
      <img alt="logo-name" class="name-logo" src="imagens/logo-name.png"/>
    </section>

    <section class="container-register">
      <h2 class="create-count">Criar conta</h2>
      <div class="content">
        <label for="name" class="name">Nome</label>
        <input type="text" id="name" class="input">
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
      <div class="img_photo">
        <label for="photo" class="´photo-class">Envie uma foto</label>
        <input type="file" name="photo" class="photo-camp">    
      </div>
      <button type="button" id="register" class="register-button">Criar conta</button>
      <span id="loginError" class="error"></span> 
      <a href="#" class="button-back">Voltar para o login</a>
    </section>
</section>  
</form>
`;

export default template;