// This function addresses some issues such as making links target different tabs
const customizeHtmlContent = (content) => {
    let childContent = content
    childContent = childContent.replace(/<a/g, '<a target="_blank" rel="noopener noreferer"')
    return childContent
}

export default customizeHtmlContent