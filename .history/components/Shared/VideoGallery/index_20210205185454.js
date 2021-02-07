// Components
import Gallery from './Gallery'

const VideoGallery = ({ ComponentProps }) => {

    return (
        <section className="containerSection" >
            <Gallery
                Video={ComponentProps?.Video || []}
            />
        </section>
    )
}

export default VideoGallery