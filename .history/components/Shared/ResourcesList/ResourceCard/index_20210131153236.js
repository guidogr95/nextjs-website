// Utils
import Link from 'next/link'
// Theme
import { borderRadius, colors } from 'styles/theme'
// Constants
import { apiUrl } from 'config/constants'
// Assets
import { FiChevronRight } from 'react-icons/fi'

const ResourceCard = ({ resourceData }) => {
    const thumbnail = `${apiUrl}${resourceData.Resource.Thumbnail.url}`
    const { Title, Slug } = resourceData.Resource

    return (
        <>
            <article>
                <div className="thumbnail" />
                <div className="body" >
                    <div className="_description" >
                        <h4>{Title}</h4>
                    </div>
                    <div className="_footer" >
                        <span>
                            FREE
                        </span>
                        <Link href={`/white-paper/${Slug}`}>
                            <a>
                                DOWNLOAD <FiChevronRight />
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
                    height: 320px;
                    min-height: 320px;
                    background: url(${thumbnail});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                ._description {
                    padding: 30px;
                    min-height: 90px;
                    display: flex;
                    align-items: center;
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

export default ResourceCard