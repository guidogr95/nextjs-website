// Components
import BlogNav from 'components/Blog/BlogNav'

const renderWithProps = ({ componentName, props }) => {
    switch (componentName) {
        case 'blog.blog-nav':
            return <BlogNav key={componentName} {...props} />
        default:
            return <p>{componentName}</p>
    }
}

export default renderWithProps