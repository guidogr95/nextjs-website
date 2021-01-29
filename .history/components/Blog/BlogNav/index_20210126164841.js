// components
import BlogNavItem from './BlogNavItem'

const BlogNav = ({ BlogNavItem }) => {
    console.log(BlogNavItem)
    return (
        <div>
            {/* {navButtons.map(button => {
                return (
                    <BlogNavItem
                        key={button.Slug}
                        slug={button.Slug}
                        label={button.Title}
                    />
                )
            })} */}
        </div>
    )
}

export default BlogNav