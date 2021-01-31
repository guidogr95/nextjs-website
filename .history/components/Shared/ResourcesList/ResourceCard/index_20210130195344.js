// Theme
import { borderRadius, colors } from 'styles/theme'
// Constants
import { apiUrl } from 'config/constants'

const ResourceCard = ({ resourceData }) => {
    const thumbnail = `${apiUrl}${resourceData.Resource.Thumbnail.url}`
    return (
        <>
            <article>
                <div className="thumbnail" />
            </article>
            <style jsx>{`
                .thumbnail {
                    width: 100%;
                    height: 400px;
                    background: url(${thumbnail});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
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
                article:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    background: rgba(50, 50, 50, 0.3);
                    backdrop-filter: blur(.4px);
                    opacity: 0;
                    transition: 0.4s ease-out;
                }
                article:hover:after {
                    opacity: 1;
                }
            `}</style>
        </>
    )
}

export default ResourceCard