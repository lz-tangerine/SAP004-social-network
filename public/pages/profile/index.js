import template from './template.js'

const render = (user)  => {
  const container = document.createElement('div');

  container.innerHTML = template(user);

  return container;
}

const init =  () => {
  
}
export default {
  render,
  init,
}