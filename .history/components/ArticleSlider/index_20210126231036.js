// Components
import ArticleSlide from './ArticleSlide'
import SliderNavigation from './SliderNavigation'

const ArticleSlider = ({ MaxPosts, Blogs }) => {

    const data = Blogs.sort((a, b) => new Date(b.published_at) - new Date(a.published_at)).slice(0, MaxPosts)

    return (
        <>
            <section className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                    { data.map((slide, index) => {
                        return (
                            <ArticleSlide
                                slideData={slide}
                                slideNumber={index + 1}
                                key={index}
                                slidesLength={data.length}
                            />
                        )
                    }) }
                </ol>
                <SliderNavigation slidesData={data} />
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