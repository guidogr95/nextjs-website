// Components
import VideoCard from './VideoCard'

const Gallery = ({ Videos }) => {
    return (
        <>
            <main>
                {Videos.length > 0
                    ? Videos.map((video, index) => {
                        return (
                            <VideoCard
                                key={index}
                                videoData={video}
                            />
                        )
                    })
                    : <p>No videos</p>
                }
            </main>
            <style jsx>{`
                main {
                    display: grid;
                    grid-template-columns: repeat(2, 50%);
                    column-gap: 20px;
                }
            `}</style>
        </>
    )
}

export default Gallery