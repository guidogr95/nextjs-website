// Components
import { desktopMaxWidth } from 'styles/theme'
import VideoCard from './VideoCard'

const Gallery = ({ Videos }) => {
    return (
        <>
            <main>
                <aside>
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
                </aside>
            </main>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                }
                aside {
                    display: grid;
                    grid-template-columns: repeat(2, 50%);
                    column-gap: 20px;
                }
            `}</style>
        </>
    )
}

export default Gallery