const ArticleSlide = ({ slideNumber, slidesLength }) => {
    return (
        <>
            <li id={`carousel__slide${slideNumber}`}
                tabIndex="0"
                className="carousel__slide">
            <div className="carousel__snapper">
                <a href={`#carousel__slide${slideNumber === 1 ? slidesLength : slideNumber - 1}`}
                className="carousel__prev">Go to last slide</a>
                <a href={`#carousel__slide${slideNumber === slidesLength ? 1 : slideNumber + 1}`}
                className="carousel__next">Go to next slide</a>
            </div>
            </li>
            <style jsx>{`
                .carousel__slide {
                    position: relative;
                    flex: 0 0 100%;
                    width: 100%;
                    background-color: #f99;
                    counter-increment: item;
                }
                .carousel__slide:nth-child(even) {
                    background-color: #99f;
                }
                .carousel__slide:before {
                    content: counter(item);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate3d(-50%,-40%,70px);
                    color: #fff;
                    font-size: 2em;
                }
                .carousel__snapper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    scroll-snap-align: center;
                }
                @media (hover: hover) {
                    .carousel__snapper {
                        animation-name: tonext, snap;
                        animation-timing-function: ease;
                        animation-duration: 4s;
                        animation-iteration-count: infinite;
                    }

                    .carousel__slide:last-child .carousel__snapper {
                        animation-name: tostart, snap;
                    }
                }
                @media (prefers-reduced-motion: reduce) {
                    .carousel__snapper {
                        animation-name: none;
                    }
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
            .carousel__navigation {
                position: absolute;
                right: 0;
                bottom: 0;
                left: 0;
                text-align: center;
            }
            .carousel__navigation-list,
            .carousel__navigation-item {
                display: inline-block;
            }
            .carousel::before,
            .carousel::after,
            .carousel__prev,
            .carousel__next {
                position: absolute;
                top: 0;
                width: 4rem;
                height: 4rem;
                transform: translateY(-50%);
                border-radius: 50%;
                font-size: 0;
                outline: 0;
            }
            .carousel::before,
            .carousel__prev {
                left: -1rem;
            }
            .carousel::after,
            .carousel__next {
                right: -1rem;
            }
            `}</style>
        </>
    )
}

export default ArticleSlide