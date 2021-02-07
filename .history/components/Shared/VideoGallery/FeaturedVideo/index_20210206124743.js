// Theme
import { colors, desktopMaxWidth } from 'styles/theme'
// Utils
import ReactPlayer from 'react-player'
// Components
import PlayIcon from 'components/Shared/PlayIcon'

const FeaturedVideo = ({ featured }) => {

    const rand = Math.floor(Math.random() * featured.length)
    const video = featured[rand]

    console.log(featured, rand)
    return (
        <>
            <div className="featured-wrapper" >
                <main>
                    <h2 className="sectionTitle" >
                        Featured
                    </h2>
                    <div className="player-container" >
                        <div className="conserve-ratio" />
                        <div className="player-wrapper" >
                            <ReactPlayer
                                url={video?.Link}
                                controls={false}
                                light={true}
                                width="100%"
                                height="100%"
                                playIcon={<PlayIcon className="customPlay" />}
                            />
                        </div>
                    </div>
                </main>
            </div>
            <style jsx>{`
                .player-container {
                    width: 65%;
                    resize: horizontal;
                    position: relative;
                }
                .conserve-ratio {
                    padding-bottom: 55%;
                }
                .player-wrapper {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                }
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
                    display: flex;
                    justify-content: center;
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