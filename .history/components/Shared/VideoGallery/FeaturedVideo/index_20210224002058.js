// Theme
import { colors, desktopMaxWidth, breakpoints } from 'styles/theme'
// Utils
import ReactPlayer from 'react-player'
// Components
import PlayIcon from 'components/Shared/PlayIcon'

const FeaturedVideo = ({ featured }) => {

    const rand = Math.floor(Math.random() * featured.length)
    const video = featured[rand]

    return (
        <>
            <div className="featured-wrapper" >
                <main>
                    <h4>
                        Featured
                    </h4>
                    <h2 className="sectionTitle">
                        {video.Title}
                    </h2>
                    <div className="playerParent" >
                        <div className="player-container" >
                            <div className="conserve-ratio" />
                            <div className="player-wrapper" >
                                <ReactPlayer
                                    url={video?.Link}
                                    light={true}
                                    controls
                                    width="100%"
                                    height="100%"
                                    playIcon={<PlayIcon className="customPlay" />}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <style jsx>{`
                .playerParent {
                    width: 65%;
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                }
                .player-container {
                    width: 100%;
                    resize: horizontal;
                    position: relative;
                }
                .player-container :global(.react-player__preview) {
                    border-radius: 8px; 
                }
                h4 {
                    color: ${colors.lightGray};
                    margin-bottom: 0;
                }
                .sectionTitle {
                    color: ${colors.lightGray};
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
                    width: 100%;
                    padding: 45px 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    background: url(https://strapi-vexxhost.tk/uploads/wavesbg_01_f502516428.svg);
                    background-attachment: fixed;
                    background-repeat: no-repeat;
                    background-size: auto;
                    background-position: bottom;

                }
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                }
                main :global(.customPlay) {
                    font-size: 3.4em;
                    opacity: 0.85;
                }
                @media screen and (max-width: ${breakpoints.smallDesktop}) {
                    .featured-wrapper {
                        padding: 45px 10px;
                    }
                }
            `}</style>
        </>
    )
}

export default FeaturedVideo