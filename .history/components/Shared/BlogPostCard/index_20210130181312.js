import Link from 'next/link'
// Theme
import { borderRadius, colors } from 'styles/theme'
// Components
import Avatar from 'components/Shared/Avatar'
// Constants
import { apiUrl } from 'config/constants'

const BlogPostCard = ({ Title, PublicationDate, Author, Thumbnail, Slug }) => {
    return (
        <>
            <article>
                <Link href={`blog/${Slug}`}>
                    <a className="_thumbnail">
                    </a>
                </Link>
                <div className="_body" >
                    <header>
                        <time className="__post-time" >
                            {new Date(PublicationDate).toDateString()}
                        </time>
                        <Link href={`blog/${Slug}`}>
                            <a>
                                <h4>{Title}</h4>
                            </a>
                        </Link>
                    </header>
                    <div className="__card-author" >
                        <Avatar
                            picture={`${apiUrl}${Author.ProfilePicture.url}`}
                        />
                        <span>{Author.fullname}</span>
                    </div>
                </div>
            </article>
            <style jsx>{`
                article {
                    display: flex;
                    flex-direction: column;
                    min-width: 250px;
                    border-radius: ${borderRadius};
                    box-shadow:  15px -15px 30px #f5f5f5, -15px 15px 30px #ffffff;
                    overflow: hidden;
                    transition: .3s ease-out all;
                }
                article ._thumbnail {
                    height: 230px;
                    background: url(${Thumbnail});
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center center;
                    transition: .3s ease-out all;
                }
                article:hover {
                    transform: scale(1.04);
                    box-shadow:  20px 20px 40px rgba(50, 50, 50, 0.1);
                }
                article:hover ._thumbnail {
                    background-size: 105%;
                }
                article ._body {
                    padding: 1.5rem;
                }
                article time {
                    color: ${colors.lightGray};
                    font-size: 0.9em;
                }
                article h4 {
                    text-transform: capitalize;
                    color: ${colors.gray};
                    margin: 10px 0 0;
                }
                article h4:hover {
                    text-decoration: underline;
                }
                article ._thumbnail img {
                    width: 100%;
                }
                article .__card-author {
                    position: relative;
                    display: grid;
                    grid-template-columns: 75px 1fr;
                    align-items: center;
                    margin: 3rem 0 0;
                }
                article .__card-author span {
                    font-weight: 600;
                    color: ${colors.gray};
                    text-transform: capitalize;
                }
            `}</style>
        </>
    )
}

export default BlogPostCard