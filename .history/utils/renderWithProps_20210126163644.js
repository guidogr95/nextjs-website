// Components
import BlogNav from 'components/Blog/BlogNav'

const renderHelper = ({ Component, props }) => {
    console.log(typeof Component, props)
    return (
        <Component {...props} />
    )
}

const pageComponentList = (name) => {
    switch (name) {
        case 'blog.blog-nav':
            return <BlogNav />
        default:
            return <p>Hello</p>
    }
}

const renderWithProps = (props, componentName) => renderHelper({ Component: pageComponentList(componentName), props })

export default renderWithProps