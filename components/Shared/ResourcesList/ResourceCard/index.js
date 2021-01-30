// Theme
import { borderRadius } from 'styles/theme'
// Constants
import { apiUrl } from 'utils/constants'

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
                }
            `}</style>
        </>
    )
}

export default ResourceCard