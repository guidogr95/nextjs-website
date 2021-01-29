// components
import BlogNavItem from './BlogNavItem'

const BlogNav = ({ BlogNavItem: navButtons, Pathname }) => {
    console.log(Pathname)
    return (
        <div>
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
        </div>
    )
}

export default BlogNav