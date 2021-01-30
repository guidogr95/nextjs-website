// Utils
import Carousel from 'react-bootstrap/Carousel'
// Theme
import { borderRadius, colors, desktopMaxWidth } from 'styles/theme'

const ArticleSlider = ({ MaxPosts, Blogs }) => {

    const data = Blogs.filter(blog => blog.Featured).slice(0, MaxPosts || 1)

    if (data.length === 0) return null

    return (
        <>
            <section className="carousel" aria-label="Gallery">
                <Carousel>
                    { data.map((slide, index) => {
                        const thumbnail = `${process.env.NEXT_PUBLIC_API_URL}${slide.Thumbnail.formats.small.url}`
                        return (
                            <Carousel.Item key={index} style={{ background: `${slide.ThumbnailBgColorHex || colors.day}` }} >
                                    <div className="slide-content" >
                                        <div className="slide-text" >
                                            <span>Featured Article</span>
                                            <h1 style={{ color: `${slide?.TitleColor || colors.gray}` }} >{slide.Title}</h1>
                                        </div>
                                        <div className="slide-image" >
                                            <img alt={` slide${index + 1}`} src={thumbnail} />
                                        </div>
                                    </div>
                            </Carousel.Item>
                        )
                    }) }
                </Carousel>
            </section>
            <style jsx>{`
                .slide-content {
                    max-width: ${desktopMaxWidth};
                    height: 100%;
                    margin: auto;
                    display: flex;
                    align-items: center;
                }
                .slide-content .slide-text {
                    padding-left: 5%;
                    max-width: 62%;
                    position: relative;
                }
                .slide-content .slide-text span {
                    margin: 10px 0;
                    display: block;
                    color: white;
                    font-smoothing: auto;
                    letter-spacing: 0.04em;
                    opacity: 0.75;
                    position: absolute;
                    top: -36px;
                }
                .slide-content .slide-text h1 {
                    font-size: 3em;
                    text-transform: capitalize;
                    font-weight: normal;
                    margin: 0;
                    font-weight: 600;
                }
                .slide-content .slide-image {
                    flex: 0 0 100%;
                    margin: 50px auto;
                    max-width: 562px;
                    width: 100%;
                }
                .slide-content .slide-image img {
                    width: 100%;
                    border-radius: ${borderRadius};
                }
                .carousel {
                    height: 450px;
                }
                .carousel :global(.carousel-control-prev),
                .carousel :global(.carousel-control-next) {
                    width: 10%;
                }
                .carousel :global(.carousel-indicators),
                .carousel :global(.carousel-control-prev),
                .carousel :global(.carousel-control-next) {
                    display: ${data.length <= 1 ? 'none' : 'flex'};
                }
            `}</style>
        </>
    )
}

export default ArticleSlider