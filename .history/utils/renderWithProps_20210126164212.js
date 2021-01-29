// Components
import BlogNav from 'components/Blog/BlogNav'

const renderHelper = ({ Component, props }) => {
    console.log(typeof Component, props)
    return (
        <Component {...props} />
    )
}

const pageComponentList = {
    'blog.blog-nav': <BlogNav />
}

const renderWithProps = ({ componentName, props }) => renderHelper({ Component: pageComponentList[componentName], props })

export default renderWithProps