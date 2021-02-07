// Components
import Gallery from './Gallery'

const VideoGallery = ({ ComponentProps }) => {

    return (
        <section className="containerSection" >
            <Gallery
                Videos={ComponentProps?.Video || []}
            />
        </section>
    )
}

export default VideoGallery