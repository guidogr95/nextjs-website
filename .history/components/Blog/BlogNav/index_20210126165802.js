// components
import BlogNavItem from './BlogNavItem'

const BlogNav = ({ BlogNavItem: navButtons, Pathname }) => {
    return (
        <div className="blogNav-container" >
            <ul>
                {navButtons.map(button => {
                    return (
                        <BlogNavItem
                            key={button.Slug}
                            slug={button.Slug}
                            label={button.Title}
                            pathname={Pathname}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default BlogNav