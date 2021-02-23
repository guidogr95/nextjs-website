// Theme
import { borderRadius } from 'styles/theme'

const ResourceBanner = (props) => {

    const {
        Resource
    } = props

    if (!Resource) return null

    return (
        <>
            <div className="banner-container" >
                <div className="banner-text" >
                    <h4>{Resource?.Title || ''}</h4>
                </div>
                <div className="banner-thumbnail" >

                </div>
            </div>
            <style jsx>{`
                .banner-container {
                    background: linear-gradient(to left, #6536ff, #2a1659);
                    min-height: 300px;
                    width: 100%;
                    border-radius: ${borderRadius};
                    margin-top: 45px;
                }
            `}</style>
        </>
    )
}

export default ResourceBanner