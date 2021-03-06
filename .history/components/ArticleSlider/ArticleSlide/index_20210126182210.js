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
            .carousel::before {
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
            }
            .carousel::after {
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
            }
            `}</style>
        </>
    )
}

export default ArticleSlide