import ArticleSlide from './ArticleSlide'

const ArticleSlider = () => {
    return (
        <>
            <section className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                    { Array.from(Array(4)).map((slide, index) => {
                        return <ArticleSlide slideNumber={index + 1} key={index} slidesLength={4} />
                    }) }
                </ol>
                <aside className="carousel__navigation">
                    <ol className="carousel__navigation-list">
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide1"
                        className="carousel__navigation-button">Go to slide 1</a>
                    </li>
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide2"
                        className="carousel__navigation-button">Go to slide 2</a>
                    </li>
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide3"
                        className="carousel__navigation-button">Go to slide 3</a>
                    </li>
                    <li className="carousel__navigation-item">
                        <a href="#carousel__slide4"
                        className="carousel__navigation-button">Go to slide 4</a>
                    </li>
                    </ol>
                </aside>
            </section>
            <style jsx>{`
            ol, li {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            .carousel {
                position: relative;
                filter: drop-shadow(0 0 10px #0003);
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
            .carousel:hover .carousel__snapper,
            .carousel:focus-within .carousel__snapper {
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
            .carousel__navigation-button {
                display: inline-block;
                width: 1.5rem;
                height: 1.5rem;
                background-color: #333;
                background-clip: content-box;
                border: 0.25rem solid transparent;
                border-radius: 50%;
                font-size: 0;
                transition: transform 0.1s;
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
            .carousel::before,
            .carousel::after {
                content: '';
                z-index: 1;
                background-color: #333;
                background-size: 1.5rem 1.5rem;
                background-repeat: no-repeat;
                background-position: center center;
                color: #fff;
                font-size: 2.5rem;
                line-height: 4rem;
                text-align: center;
                pointer-events: none;
            }
            .carousel::before {
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
            }
            .carousel::after {
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
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