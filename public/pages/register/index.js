import template from './template.js'

const register = ()  => {
    const container = document.createElement('div');

    container.innerHTML = template;

    return container;
}

export default register;