import template from './template.js'

const render = ()  => {
    const container = document.createElement('div');

    container.innerHTML = template;

    return container;
}


const init =  () => {
    console.log('incializaou')
    
}

export default {
    render,
    init,
}