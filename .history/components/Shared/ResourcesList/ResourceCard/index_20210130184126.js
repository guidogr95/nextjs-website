// Theme
import { borderRadius } from 'styles/theme'
// Constants
import { apiUrl } from 'config/constants'

const ResourceCard = ({ resourceData }) => {
    const thumbnail = `${apiUrl}${resourceData.Resource.Thumbnail.url}`
    return (
        <>
            <article>

            </article>
            <style jsx>{`
                article {
                    width: 100%;
                    height: 300px;
                    background: url(${thumbnail});
                    background-size: cover;
                    background-repeat: no-repeat;
                    border-radius: ${borderRadius};
                    position: relative;
                    transition: 0.4s ease-out;
                    box-shadow: 0px 7px 20px rgba(70, 70, 70, 0.1);
                }
                article:hover {
                    transform: translateY(-10px);
                }
                article:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    background: rgba(200, 200, 200, 0.3);
                    backdrop-filter: blur(2px);
                }
            `}</style>
        </>
    )
}

export default ResourceCard