// Theme
import { borderRadius, colors } from 'styles/theme'
// Constants
import { apiUrl } from 'config/constants'

const ResourceCard = ({ resourceData }) => {
    const thumbnail = `${apiUrl}${resourceData.Resource.Thumbnail.url}`
    const { Title } = resourceData.Resource
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
                        <span>
                            Download
                        </span>
                    </div>
                </div>
            </article>
            <style jsx>{`
                .thumbnail {
                    width: 100%;
                    height: 320px;
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
                }
                article {
                    width: 100%;
                    border-radius: ${borderRadius};
                    position: relative;
                    transition: 0.4s ease-out;
                    box-shadow: 0px 7px 20px rgba(70, 70, 70, 0.1);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                article:hover {
                    transform: translateY(-10px);
                    box-shadow: 0px 7px 20px rgba(70, 70, 70, 0.5);
                }
            `}</style>
        </>
    )
}

export default ResourceCard