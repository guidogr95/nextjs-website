// Components
import BlogNav from 'components/Blog/BlogNav'

const renderWithProps = ({ componentName }) => {
    console.log(componentName)
    switch (componentName) {
        case 'blog.blog-nav':
            return <BlogNav {...props} />
        default:
            return <p>Hello</p>
    }
}

export default renderWithProps