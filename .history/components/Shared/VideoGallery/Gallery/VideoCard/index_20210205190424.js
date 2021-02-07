// Utils
import ReactPlayer from 'react-player'

const VideoCard = ({ videoData }) => {

    const { Title, Link } = videoData

    return (
        <>
            <div classNames="card-container" >
                <div className="player-container" >
                    <div className="conserve-ratio" />
                    <div className="player-wrapper" >
                        <ReactPlayer
                            url={Link}
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
                <div className="card-footer" >
                    <h4>{Title}</h4>
                </div>
            </div>
            <style jsx>{`
                .card-container {
                    display: flex;
                    flex-direction: column;
                }
                .player-container {
                    width: 100%;
                    resize: horizontal;
                    background: black;
                }
                .conserve-ratio {
                    padding-bottom: 75%;
                    background: white;
                }
                .player-wrapper {
                    display: none;
                }
                .card-footer {
                    padding: 15px;
                }
            `}</style>
        </>
    )
}

export default VideoCard