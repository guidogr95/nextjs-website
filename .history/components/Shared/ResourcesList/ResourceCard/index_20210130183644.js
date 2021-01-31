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
                    box-shadow: 0px 7px 20px rgba(50, 50, 50, 0.3);
                }
            `}</style>
        </>
    )
}

export default ResourceCard