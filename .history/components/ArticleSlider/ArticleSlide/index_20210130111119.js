// Components
import SlideArrow from './SlideArrow'
// Contants
import { apiUrl } from 'utils/constants'
// Theme
import { borderRadius, colors, desktopMaxWidth } from 'styles/theme'
// Utils
import Carousel from 'react-bootstrap/Carousel'

const ArticleSlide = ({ slideNumber, slidesLength, slideData }) => {

    const thumbnail = `${apiUrl}${slideData.Thumbnail.formats.small.url}`

    return (
        <>
            <Carousel.Item className="slide-content">
                    <div className="slide-text" >
                        <span>Featured Article</span>
                        <h1>{slideData.Title}</h1>
                    </div>
                    <div className="slide-image" >
                        <img alt={` slide${slideNumber}`} src={thumbnail} />
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
                    color: ${slideData?.TitleColor || colors.gray};
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
                .carousel__slide {
                    position: relative;
                    flex: 0 0 100%;
                    width: 100%;
                    background-color: #f99;
                    counter-increment: item;
                    outline: 0;
                }
                .carousel__slide {
                    background: ${slideData.ThumbnailBgColorHex || colors.day};
                    background-size: cover;
                    background-repeat: no-repeat;
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
                    opacity: 0.15;
                    transition: .3s ease-out all;
                }
                .carousel__snapper:hover .snapperButton_wrapper {
                    opacity: 0.65;   
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