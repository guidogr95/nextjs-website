// Components
import ArticleSlide from './ArticleSlide'
import SliderNavigation from './SliderNavigation'

const ArticleSlider = () => {

    const data = [
        {
            title: 'Customer service job description examples and best practices',
            img: 'https://hs-marketing.imgix.net/images/uploads/saas-customer-success.png?ixlib=gatsby-transform-url-1.0.2&fit=crop&w=340&h=191&auto=format%2Ccompress&ar=undefined&fm=webp&dpr=1&q=75'
        },
        {
            title: 'Customer service job description examples and best practices',
            img: 'https://hs-marketing.imgix.net/images/uploads/saas-customer-success.png?ixlib=gatsby-transform-url-1.0.2&fit=crop&w=340&h=191&auto=format%2Ccompress&ar=undefined&fm=webp&dpr=1&q=75'
        },
        {
            title: 'Customer service job description examples and best practices',
            img: 'https://hs-marketing.imgix.net/images/uploads/saas-customer-success.png?ixlib=gatsby-transform-url-1.0.2&fit=crop&w=340&h=191&auto=format%2Ccompress&ar=undefined&fm=webp&dpr=1&q=75'
        }
    ]

    return (
        <>
            <section className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                    { data.map((slide, index) => {
                        return <ArticleSlide slideNumber={index + 1} key={index} slidesLength={data.length} />
                    }) }
                </ol>
                <SliderNavigation slideData={data} />
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