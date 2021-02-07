// Components
import VideoCard from './VideoCard'

const Gallery = ({ Videos }) => {
    return (
        <main>
            {Videos.length > 0
                ? Videos.map((video, index) => {
                    return (
                        <VideoCard
                            key={index}
                            VideoData={video}
                        />
                    )
                })
                : <p>No videos</p>
            }
        </main>
    )
}

export default Gallery