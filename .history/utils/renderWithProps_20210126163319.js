// Components
import BlogNav from 'components/Blog/BlogNav'

const renderHelper = ({ Component, props }) => {
    console.log(Component, props)
    return (
        <Component {...props} />
    )
}

const pageComponentList = {
    'blog.blog-nav': <BlogNav />
}

const renderWithProps = (props, componentName) => renderHelper({ Component: pageComponentList[componentName], props })

export default renderWithProps