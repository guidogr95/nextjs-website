// Theme
import { colors } from 'styles/theme'

const FeaturedVideo = ({ featured }) => {

    const video = featured[Math.floor(Math.random() * featured.length) + 1]

    return (
        <>
            <div className="featured-wrapper" >
                
            </div>
            <style jsx>{`
                .featured-wrapper {
                    background: ${colors.nightBlack};
                    width: 100%;
                    height: 600px;
                }
            `}</style>
        </>
    )
}

export default FeaturedVideo