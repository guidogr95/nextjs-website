const getPath = (page) => {
    let path = page.Path.trim()
    if (page.Parent) path = `${getPath(page.Parent)}/${path}`
    return path
}

// Iterate through every page and get path including path from parent
const getPaths = (pages) => {
    const paths = pages.map(page => {
        const path = getPath(page)
        return `/${path}`
    })
    return paths
}

export default getPaths