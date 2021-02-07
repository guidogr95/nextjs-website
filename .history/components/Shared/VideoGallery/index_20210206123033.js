// Components
import Gallery from './Gallery'
import FeaturedVideo from './FeaturedVideo'

const VideoGallery = ({ ComponentProps }) => {

    const featured = ComponentProps.Video.filter(video => video.featured)

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
                    justify-content: center;
                }
            `}</style>
        </>
    )
}

export default VideoGallery