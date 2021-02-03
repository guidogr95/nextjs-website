// Utils
import Link from 'next/link'
import randomIntFromInterval from 'utils/randomIntFromInterval'
// Theme
import { borderRadius, colors } from 'styles/theme'
// Assets
import { FiChevronRight } from 'react-icons/fi'

const TutorialPostCard = ({ Title, Thumbnail, Slug, Content }) => {

    const cutContent = (content) => {

        const minLength = 120
        const maxLength = 240

        return `${content.slice(0, randomIntFromInterval(minLength, maxLength))} [...]`
    }

    return (
        <>
            <article>
                <div className="thumbnail" />
                <div className="body" >
                    <div className="_description" >
                        <h4>{Title}</h4>
                        { cutContent(Content)}
                    </div>
                    <div className="_footer" >
                        <Link href={`/resources/tutorials/${Slug}`}>
                            <a>
                                Read More <FiChevronRight />
                            </a>
                        </Link>
                    </div>
                </div>
            </article>
            <style jsx>{`
                .body {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                }
                .thumbnail {
                    width: 100%;
                    height: 170px;
                    min-height: 170px;
                    background: url(${Thumbnail});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                ._description {
                    padding: 30px;
                    min-height: 90px;
                    display: flex;
                    flex-direction: column;
                }
                ._description h4 {
                    text-transform: capitalize;
                    color: ${colors.lightGray};
                    line-height: 1.4;
                    margin-bottom: 0;
                }
                ._footer {
                    padding: 30px;
                    border-top: 1px solid rgba(100, 100, 100, 0.2);
                    display: flex;
                    justify-content: space-between;
                    height: 85px;
                }
                ._footer :global(a) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    iine-height: 1;
                }
                ._footer :global(a svg) {
                    font-size: 1.2em;
                    opacity: 0;
                    transform: translateX(5px);
                    transition: 0.3s ease-out;
                }
                ._footer :global(a:hover svg) {
                    transform: translateX(-1px);
                    opacity: 1;
                }
                article {
                    width: 100%;
                    border-radius: ${borderRadius};
                    position: relative;
                    transition: 0.3s ease-out;
                    box-shadow: 0px 7px 20px rgba(70, 70, 70, 0.1);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                article:hover {
                    transform: translateY(-10px);
                    box-shadow: 0px 7px 30px rgba(70, 70, 70, 0.3);
                }
            `}</style>
        </>
    )
}

export default TutorialPostCard