// components
import BlogNavItem from './BlogNavItem'
// Theme
import { colors, desktopMaxWidth } from 'styles/theme'

const BlogNav = ({ BlogNavItem: navButtons, Pathname }) => {
    return (
        <>
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
            <style jsx>{`
                .blogNav-container {
                    background: #F1F3F5;
                    display: flex;
                    justify-content: center;
                }
                ul {
                    max-width: ${desktopMaxWidth};
                    display: flex;
                    list-style: none;
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default BlogNav