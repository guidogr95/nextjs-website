// Components
import Gallery from './Gallery'
import FeaturedVideo from './FeaturedVideo'

const VideoGallery = ({ ComponentProps }) => {

    const featured = ComponentProps.Video.filter(video => video.Featured)

    return (
        <>
            <section className="containerSection" >
                <FeaturedVideo
                    featured={featured}
                />
                <Gallery
                    Videos={ComponentProps?.Video || []}
                />
            </section>
            <style jsx>{`
                section {
                    background: whitesmoke;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
        </>
    )
}

export default VideoGallery