// components
import BlogNavItem from './BlogNavItem'
// Theme
import { colors, desktopMaxWidth } from 'styles/theme'

const BlogNav = ({ BlogNavItem: navButtons, Pathname }) => {
    return (
        <>
            <div className="blogNav-container" >
                <ul>
                    <li className="navTitle" >
                        <span>Discover</span>
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
                    padding: 40px;
                }
                ul {
                    max-width: ${desktopMaxWidth};
                    display: grid;
                    grid-template-columns: repeat(4,minmax(100px,1fr));
                    column-gap: 80px;
                    row-gap: 40px;
                    list-style: none;
                    width: 100%;
                }
                ul :global(li) {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .navTitle {
                    font-size: 2em;
                    color: ${colors.lightGray};
                    font-weight: bold;
                    letter-spacing: 0.025em;
                }
            `}</style>
        </>
    )
}

export default BlogNav