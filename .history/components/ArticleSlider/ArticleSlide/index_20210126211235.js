// Components
import { colors, desktopMaxWidth } from 'styles/theme'
import SlideArrow from './SlideArrow'

const ArticleSlide = ({ slideNumber, slidesLength, slideData }) => {
    return (
        <>
            <li
            id={`carousel__slide${slideNumber}`}
            tabIndex="0"
            className="carousel__slide"
            >
                <div
                className="carousel__snapper"
                >
                    <div className="slide-content" >
                        <div className="slide-text" >

                        </div>
                    </div>
                    <div
                    className="snapperButton_wrapper prev"
                    >
                        <a
                        href={`#carousel__slide${slideNumber === 1 ? slidesLength : slideNumber - 1}`}
                        className="carousel__prev"
                        >
                            <SlideArrow color={colors.lightGray} />
                        </a>
                    </div>
                    <div
                    className="snapperButton_wrapper next"
                    >
                        <a
                        href={`#carousel__slide${slideNumber === slidesLength ? 1 : slideNumber + 1}`}
                        className="carousel__next"
                        >
                            <SlideArrow color={colors.lightGray} />
                        </a>
                    </div>
                </div>
            </li>
            <style jsx>{`
                .slide-content {
                    max-width: ${desktopMaxWidth};
                    height: 100%;
                    margin: auto;
                    display: flex;
                    align-items: center;
                }
                .slide-content .slide-text {
                    padding-left: 8.3%;
                    max-width: 62%;
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
                .snapperButton_wrapper {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                }
                .snapperButton_wrapper.prev {
                    left: 20px;
                }
                .snapperButton_wrapper.prev :global(svg) {
                    font-size: 2.8em;
                    transform: rotate(-90deg);
                }
                .snapperButton_wrapper.next :global(svg) {
                    font-size: 2.8em;
                    transform: rotate(90deg);
                }
                .snapperButton_wrapper.next {
                    right: 20px;
                }
            `}</style>
        </>
    )
}

export default ArticleSlide