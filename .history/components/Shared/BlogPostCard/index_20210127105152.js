// Theme
import { borderRadius, colors } from 'styles/theme'
// Components
import Avatar from 'components/Shared/Avatar'
// Constants
import { apiUrl } from 'utils/constants'

const BlogPostCard = ({ Title, PublicationDate, Author, Thumbnail }) => {

    return (
        <>
            <article>
                <div className="_thumbnail" />
                <div className="_body" >
                    <header>
                        <time className="__post-time" >
                            {PublicationDate}
                        </time>
                        <h3>{Title}</h3>
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
                    box-shadow: none;
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
                article h3 {
                    text-transform: capitalize;
                    color: ${colors.gray};
                    margin: 10px 0 0;
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