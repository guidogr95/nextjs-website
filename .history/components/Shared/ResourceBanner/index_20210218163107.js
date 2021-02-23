// Theme
import { borderRadius, colors } from 'styles/theme'

const ResourceBanner = (props) => {

    const {
        Resource
    } = props

    if (!Resource) return null

    return (
        <>
            <div className="banner-container" >
                <div className="banner-text" >
                    <h3>{Resource?.Title || ''}</h3>
                </div>
                <div className="banner-thumbnail" >
                    <div className="thumbnail" />
                </div>
            </div>
            <style jsx>{`
                .banner-container {
                    background: linear-gradient(to left, #6536ff, #2a1659);
                    min-height: 300px;
                    width: 100%;
                    border-radius: ${borderRadius};
                    margin-top: 45px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    column-gap: 15px;
                }
                .banner-text {
                    padding: 20px;
                    color: ${colors.whiteGray};
                }
                .banner-thumbnail {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .thumbnail {
                    width: 30%;
                    padding-bottom: 60%;
                    background: black;
                }
                h3 {
                    line-height: 1.6;
                    font-weight: 400;
                    letter-spacing: 0.02em;
                }
            `}</style>
        </>
    )
}

export default ResourceBanner