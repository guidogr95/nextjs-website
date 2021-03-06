// Utils
import ReactPlayer from 'react-player'
import { borderRadius, colors } from 'styles/theme'
// Components
import PlayIcon from 'components/Shared/PlayIcon'

const VideoCard = ({ videoData }) => {

    const { Title, Link } = videoData

    return (
        <>
            <div className="card-container" >
                <div className="player-container" >
                    <div className="conserve-ratio" />
                    <div className="player-wrapper" >
                        <ReactPlayer
                            url={Link}
                            controls={false}
                            light={true}
                            width="100%"
                            height="100%"
                            playIcon={<PlayIcon className="customPlay" />}
                        />
                    </div>
                </div>
                <div className="card-footer" >
                    <h5>{Title}</h5>
                </div>
            </div>
            <style jsx>{`
                .player-wrapper :global(.customPlay) {
                    font-size: 3.2sem;
                }
                .card-container {
                    display: flex;
                    flex-direction: column;
                    border-radius: ${borderRadius};
                    overflow: auto;
                    border: 1px solid ${colors.night}30;
                }
                .player-container {
                    width: 100%;
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
                .card-footer {
                    padding: 15px;
                    display: flex;
                    align-items: center;
                    background: white;
                    height: 100%;
                }
                h5 {
                    margin-bottom: 0;
                }
            `}</style>
        </>
    )
}

export default VideoCard