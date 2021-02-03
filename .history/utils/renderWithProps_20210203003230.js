// Components
import BlogNav from 'components/Blog/BlogNav'
import ArticleSlider from 'components/ArticleSlider'
import AllBlogPosts from 'components/Blog/AllBlogPosts'
import SmallHeader from 'components/Shared/SmallHeader'
import ResourcesList from 'components/Shared/ResourcesList'
import AllTutorials from 'components/Tutorials/AllTutorials'

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
        case 'whitepapers-ebooks.all-whitepapers-and-ebooks':
            return <ResourcesList key={componentName} {...props} />
        case 'tutorials.all-tutorials':
            return <AllTutorials key={componentName} {...props} />
        default:
            return <p>{componentName}</p>
    }
}

export default renderWithProps