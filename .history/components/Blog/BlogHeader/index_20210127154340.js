// Constants
import { apiUrl } from 'utils/constants'
// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import Avatar from 'components/Shared/Avatar'

const BlogHeader = ({ Title, Author, Thumbnail, BackgroundColor }) => {
    return (
        <>
            <section>
                <header>
                    <aside className="header-text" >
                        <h1>
                            {Title}
                        </h1>
                        <div className="blog-author" >
                            <Avatar
                                picture={`${apiUrl}${Author.ProfilePicture.url}`}
                            />
                            <span>{Author.fullname}</span>
                        </div>
                    </aside>
                    <aside className="header-image" >
                        <img src={Thumbnail} alt="blogPost thumbnail" />
                    </aside>
                </header>
            </section>
            <style jsx>{`
                section {
                    background: ${BackgroundColor || 'white'};
                    display: flex;
                    justify-content: center;
                    height: 450px;
                }
                header {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .header-text {
                    padding-left: 8.3%;
                    max-width: 62%;
                    position: relative;
                }
                .header-text h1 {
                    font-size: 3em;
                    text-transform: capitalize;
                    font-weight: normal;
                    margin: 0;
                    font-weight: 600;
                }
                .header-image {
                    flex: 0 0 100%;
                    margin: 50px auto;
                    max-width: 562px;
                    width: 100%;
                }
                .header-image {
                    width: 100%;
                }
                article .blog-author {
                    position: relative;
                    display: grid;
                    grid-template-columns: 75px 1fr;
                    align-items: center;
                    margin: 3rem 0 0;
                }
                article .blog-author span {
                    font-weight: 600;
                    color: ${colors.gray};
                    text-transform: capitalize;
                }
            `}</style>
        </>
    )
}

export default BlogHeader