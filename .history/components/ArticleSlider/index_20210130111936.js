// Components
import ArticleSlide from './ArticleSlide'
import SliderNavigation from './SliderNavigation'
// Utils
import Carousel from 'react-bootstrap/Carousel'
// Constants
import { apiUrl } from 'utils/constants'
// Theme
import { borderRadius, colors, desktopMaxWidth } from 'styles/theme'

const ArticleSlider = ({ MaxPosts, Blogs }) => {

    const data = Blogs.filter(blog => blog.Featured).slice(0, MaxPosts || 1)

    return (
        <>
            <section className="carousel" aria-label="Gallery">
                <Carousel>
                    { data.map((slide, index) => {
                        const thumbnail = `${apiUrl}${slide.Thumbnail.formats.small.url}`
                        return (
                            <>
                                <Carousel.Item key={index}>
                                        <div className="slide-content" >
                                            <div className="slide-text" >
                                                <span>Featured Article</span>
                                                <h1>{slide.Title}</h1>
                                            </div>
                                            <div className="slide-image" >
                                                <img alt={` slide${index + 1}`} src={thumbnail} />
                                            </div>
                                        </div>
                                </Carousel.Item>
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
                                        color: ${slide?.TitleColor || colors.gray};
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
                                `}</style>
                            </>
                        )
                    }) }
                </Carousel>
                {/* <ol className="carousel__viewport">
                </ol>
                { data.length > 1 && <SliderNavigation slidesData={data} /> } */}
            </section>
            <style jsx>{`
                
            ol, li {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            .carousel {
                position: relative;
                perspective: 100px;
                height: 450px;
            }
            .carousel__viewport::-webkit-scrollbar {
               display: none;
            }
            .carousel__viewport {
                -ms-overflow-style: none;
                scrollbar-width: none;  
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                display: flex;
                overflow-x: scroll;
                counter-reset: item;
                scroll-behavior: smooth;
                scroll-snap-type: x mandatory;
            }
            .carousel:hover :global(.carousel__snapper),
            .carousel:focus-within :global(.carousel__snapper) {
                animation-name: none;
            }
            @keyframes tonext {
                75% {
                    left: 0;
                }
                95% {
                    left: 100%;
                }
                98% {
                    left: 100%;
                }
                99% {
                    left: 0;
                }
            }
            @keyframes tostart {
                75% {
                    left: 0;
                }
                95% {
                    left: -300%;
                }
                98% {
                    left: -300%;
                }
                99% {
                    left: 0;
                }
            }
            @keyframes snap {
                96% {
                    scroll-snap-align: center;
                }
                97% {
                    scroll-snap-align: none;
                }
                99% {
                    scroll-snap-align: none;
                }
                100% {
                    scroll-snap-align: center;
                }
            }
            `}</style>
        </>
    )
}

export default ArticleSlider