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
                    <h5>
                        {Title}
                    </h5>
                </div>
            </div>
            <style jsx>{`
                .result-wrapper {
                    display: grid;
                    grid-template-columns: 100px auto;
                    overflow: hidden;
                }
                .thumbnail-holder {
                    background: ${Thumbnail ? `url(${apiUrl}${Thumbnail})` : colors.lightGray};
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 10px;
                }
                .textContent {
                    padding: 0 0 0 15px;
                    display: flex;
                    align-items: center;
                }
                h5 {
                    margin: 0;
                    padding: 10px 0;
                }
            `}</style>
        </>
    )
}

export default TutorialSearchResult