// components
import BlogNavItem from './BlogNavItem'
// Theme
import { desktopMaxWidth } from 'styles/theme'

const BlogNav = ({ BlogNavItem: navButtons, Pathname }) => {
    return (
        <>
            <div className="blogNav-container" >
                <ul>
                    <li className="navTitle" >
                        Discover
                    </li>
                    {navButtons.map(button => {
                        return (
                            <BlogNavItem
                                key={button.Slug}
                                slug={button.Slug}
                                label={button.Label}
                                pathname={Pathname}
                            />
                        )
                    })}
                </ul>
            </div>
            <style jsx>{`
                .blogNav-container {
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