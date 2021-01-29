// components
import BlogNavItem from './BlogNavItem'
// Theme
import { desktopMaxWidth } from 'styles/theme'

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
                    background: whitesmoke;
                    display: flex;
                    justify-content: center;
                    box-shadow:  20px 20px 74px #e6e6e6,
                        -20px -20px 74px #ffffff;
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