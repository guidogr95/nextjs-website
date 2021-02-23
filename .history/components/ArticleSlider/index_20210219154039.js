// Utils
import Carousel from 'react-bootstrap/Carousel'
// Constants
import { apiUrl } from 'config/constants'
// Theme
import { borderRadius, colors, desktopMaxWidth, breakpoints } from 'styles/theme'

const ArticleSlider = ({ ComponentProps, Blogs }) => {

    const MaxPosts = ComponentProps?.MaxPosts

    const data = Blogs.filter(blog => blog.Featured).slice(0, MaxPosts || 1)

    if (data.length === 0) return null

    return (
        <>
            <section className="carousel" aria-label="Gallery">
                <Carousel className="carousel-wrapper" >
                    { data.map((slide, index) => {
                        const thumbnail = `${apiUrl}${slide.Thumbnail.formats.small.url}`
                        return (
                            <Carousel.Item key={index} style={{ background: `${slide.ThumbnailBgColorHex || colors.day}` }} >
                                    <div className="slide-content" >
                                        <div className="slide-text" >
                                            <span>Featured Article</span>
                                            <h1 style={{ color: `${slide?.TitleColor || colors.gray}` }} >{slide.Title}</h1>
                                        </div>
                                        <div className="slide-image" style={{ background: `url(${thumbnail})` }} />
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
                    width: 100%;
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
                    font-weight: 300;
                }
                .slide-content .slide-text h1 {
                    font-size: 3em;
                    text-transform: capitalize;
                    font-weight: normal;
                    margin: 0;
                    font-weight: 500;
                }
                .slide-content .slide-image {
                    flex: 0 0 100%;
                    margin: 50px auto;
                    max-width: 562px;
                    width: 100%;
                    padding-bottom: 25%;
                    background-size: cover !important;
                    background-position: center !important;
                    background-repeat: no-repeat !important;
                    border-radius: ${borderRadius};
                }
                .slide-content .slide-image img {
                    width: 100%;
                    border-radius: ${borderRadius};
                }
                .carousel :global(.carousel-item) {
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
                @media screen and (max-width: 1170px) {
                    .slide-content {
                        padding: 0 20px;
                    }
                }
                @media screen and (max-width: ${breakpoints.smallDesktop}) {
                    .carousel :global(.carousel-item) {
                        height: initial;
                        min-height: 65vh;
                        display: flex;
                        background: ${colors.whiteGray} !important;
                    }
                    .slide-content {
                        max-width: 100%;
                        flex-direction: column-reverse;
                        justify-content: center;
                    }
                    .slide-content .slide-image {
                        flex: none;
                        max-width: 650px;
                        width: 65vw;
                        padding-bottom: 37vh;
                        margin: 0 auto 0 auto;
                    }
                    .slide-content .slide-text h1 {
                        font-size: 2.3em;
                        color: ${colors.gray};
                    }
                    .slide-content .slide-text span {
                        color: ${colors.lightGray};
                    }
                    .slide-content .slide-text {
                        padding-left: 0;
                        margin-top: 60px;
                    }
                }
                @media screen and (max-width: ${breakpoints.ipad}) {
                    .slide-content .slide-image {
                        padding-bottom: 32vh;
                        max-width: 100%;
                        width: 75vw;
                    }
                }
                @media screen and (max-width: 620px) {
                    .slide-content .slide-image {
                        width: 98vw;
                        padding-bottom: 55%;
                    }
                    .carousel :global(.carousel-item) {
                        min-height: 50vh;
                    }
                }
            `}</style>
        </>
    )
}

export default ArticleSlider