// Theme
import { borderRadius, colors } from 'styles/theme'
// Components
import Avatar from 'components/Shared/Avatar'

const BlogPostCard = ({ postInfo }) => {
    return (
        <>
            <article>
                <div className="_thumbnail" >
                    <img alt="post thumbnail" src="https://strapi-vexxhost.tk/uploads/small_The_Impact_Of_Cloud_Computing_On_The_Telecom_Industry_800x450_2211553397.png" />
                </div>
                <div className="_body" >
                    <header>
                        <time className="__post-time" >
                        Some date
                        </time>
                        <h3>The impact of cloud computing on the telecom industry</h3>
                    </header>
                    <div className="__card-author" >
                        <Avatar />
                    </div>
                </div>
            </article>
            <style jsx>{`
                article {
                    display: flex;
                    flex-direction: column;
                    min-width: 250px;
                    border-radius: ${borderRadius};
                    box-shadow:  -15px 15px 30px #fcfcfc,
                        15px -15px 30px #ffffff;
                    overflow: hidden;
                }
                article ._body {
                    padding: 1.5rem;
                }
                article h3 {
                    text-transform: capitalize;
                    color: ${colors.lightGray}
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
            `}</style>
        </>
    )
}

export default BlogPostCard