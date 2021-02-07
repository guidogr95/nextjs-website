// Theme
import { colors, desktopMaxWidth } from 'styles/theme'
// Utils
import ReactPlayer from 'react-player'
// Components
import PlayIcon from 'components/Shared/PlayIcon'

const FeaturedVideo = ({ featured }) => {

    console.log(featured)
    const video = featured[Math.floor(Math.random() * featured.length) + 1]

    return (
        <>
            <div className="featured-wrapper" >
                <main>
                    {/* <ReactPlayer
                        url={video.Link}
                        controls={false}
                        light={true}
                        width="100%"
                        height="100%"
                        playIcon={<PlayIcon className="customPlay" />}
                    /> */}
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
                main :global(.customPlay) {
                    font-size: 3.4em;
                    opacity: 0.85;
                }
            `}</style>
        </>
    )
}

export default FeaturedVideo