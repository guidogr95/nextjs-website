// Theme
import { colors, desktopMaxWidth } from 'styles/theme'

const FeaturedVideo = ({ featured }) => {

    const video = featured[Math.floor(Math.random() * featured.length) + 1]

    return (
        <>
            <div className="featured-wrapper" >
                <main>

                </main>
            </div>
            <style jsx>{`
                .featured-wrapper {
                    background: ${colors.nightBlack};
                    width: 100%;
                    height: 600px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default FeaturedVideo