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
                            <span>Featured Article</span>
                            <h1>{slideData.Title}</h1>
                        </div>
                        <div className="slide-image" >
                            <img alt={` slide${slideNumber}`} src={slideData.Img} />
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
                    top: -10px;
                    left: 0;
                }
                .slide-content .slide-text h1 {
                    font-size: 3em;
                    text-transform: capitalize;
                    font-weight: normal;
                    margin: 0;
                    color: ${colors.night};
                }
                .slide-content .slide-image {
                    flex: 0 0 100%;
                    margin: 50px auto;
                    max-width: 562px;
                    width: 100%;
                }
                .slide-content .slide-image img {
                    width: 100%;
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