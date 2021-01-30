// Theme
import { borderRadius } from 'styles/theme'

const ResourceCard = ({ resourceData }) => {
    const thumbnail = `${process.env.API_URL}${resourceData.Resource.Thumbnail.url}`
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
                }
            `}</style>
        </>
    )
}

export default ResourceCard