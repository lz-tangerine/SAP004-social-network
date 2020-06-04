import template from './template.js'
import {createUser} from './data.js'

const render = ()  => {
    const container = document.createElement('div');
    container.innerHTML = template;
    return container;
}

const init = () => {
    const registerButton = document.getElementById('register');
    console.log(registerButton)
    registerButton.addEventListener('click', createUser);
};


export default {
    render, 
    init,
    
}