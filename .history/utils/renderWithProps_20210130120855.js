// Components
import BlogNav from 'components/Blog/BlogNav'
import ArticleSlider from 'components/ArticleSlider'
import AllBlogPosts from 'components/Blog/AllBlogPosts'
import SmallHeader from 'components/Shared/SmallHeader'

const renderWithProps = ({ componentName, props }) => {
    switch (componentName) {
        case 'blog.blog-nav':
            return <BlogNav key={componentName} {...props} />
        case 'blog.featured-post-slider':
            return <ArticleSlider key={componentName} {...props} />
        case 'blog.all-blog-posts':
            return <AllBlogPosts key={componentName} {...props} />
        case 'universal.small-header':
            return <SmallHeader key={componentName} {...props} />
        default:
            return <p>{componentName}</p>
    }
}

export default renderWithProps