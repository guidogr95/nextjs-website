// Theme
import { borderRadius } from 'styles/theme'
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
                        <h3></h3>
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
                    box-shadow:  23px 23px 46px #f2f2f2,
                                -23px -23px 46px #ffffff;
                    overflow: hidden;
                }
                article ._body {
                    padding: 1.5rem;
                }
                article ._thumbnail img {
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default BlogPostCard