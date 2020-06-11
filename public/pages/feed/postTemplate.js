const postTemplate = ({ userId, text, likes }) => {
    return `
    Número de likes${likes} 
    texto ${text}  
    quem ${userId}
    `
}

export default postTemplate;