// Components
import BlogNav from 'components/Blog/BlogNav'

const renderWithProps = ({ componentName, props }) => {
    console.log('navs', props)
    switch (componentName) {
        case 'blog.blog-nav':
            return <BlogNav {...props} />
        default:
            return <p>Hello</p>
    }
}

export default renderWithProps