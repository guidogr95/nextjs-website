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
                    <div className="playerParent" >
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
                        <h3>{video.Title}</h3>
                    </div>
                </main>
                <div className="ocean">
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
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
                .sectionTitle,
                h3 {
                    color: ${colors.whiteGray};
                }
                h3 {
                    margin-top: 20px;
                    margin-bottom: 0;
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
                .ocean { 
                    height: 5%;
                    position: absolute;
                    bottom: -45px;
                    left: 0;
                    background: #015871;    
                    z-index: 1;
                }

                .wave {
                    background: url(https://strapi-vexxhost.tk/uploads/wavesbg_01_f502516428.svg) repeat-x; 
                    position: absolute;
                    top: -198px;
                    width: 6400px;
                    height: 198px;
                    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
                    transform: translate3d(0, 0, 0);
                }

                .wave:nth-of-type(2) {
                    top: -175px;
                    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
                    opacity: 1;
                }

                @keyframes wave {
                0% {
                    margin-left: 0;
                }
                100% {
                    margin-left: -1600px;
                }
                }

                @keyframes swell {
                0%, 100% {
                    transform: translate3d(0,-25px,0);
                }
                50% {
                    transform: translate3d(0,5px,0);
                }
                }
            `}</style>
        </>
    )
}

export default FeaturedVideo