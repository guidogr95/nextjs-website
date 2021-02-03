// Theme
import { colors } from 'styles/theme'
// Constants
import { apiUrl } from 'config/constants'

const TutorialSearchResult = ({ Title, Slug, Content, Thumbnail }) => {
    return (
        <>
            <div className="result-wrapper" >
                <div className="thumbnail-holder" />
                <div className="textContent" >
                    <h4>
                        {Title}
                    </h4>
                    <p>
                        {Content}
                    </p>
                </div>
            </div>
            <style jsx>{`
                .result-wrapper {
                    display: grid;
                    grid-template-columns: 100px auto;
                }
                .thumbnail-holder {
                    background: ${Thumbnail ? `url(${apiUrl}${Thumbnail})` : colors.lightGray}
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 10px;
                }
                .textContent {
                    padding: 0 0 0 15px;
                    display: flex;
                    flex-direction: column;
                }
                p {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            `}</style>
        </>
    )
}

export default TutorialSearchResult