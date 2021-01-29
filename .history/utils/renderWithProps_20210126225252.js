// Components
import BlogNav from 'components/Blog/BlogNav'
import ArticleSlider from 'components/ArticleSlider'

const renderWithProps = ({ componentName, props }) => {
    switch (componentName) {
        case 'blog.blog-nav':
            return <BlogNav key={componentName} {...props} />
        case 'blog.featured-post-slider':
            return <ArticleSlider key={componentName} {...props} />
        default:
            return <p>{componentName}</p>
    }
}

export default renderWithProps