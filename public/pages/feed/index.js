import template from './template.js'

const feed = ()  => {
    const container = document.createElement('div');

    container.innerHTML = template;

    return container;
}

export default feed;