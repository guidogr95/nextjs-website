// Components
import ArticleSlide from './ArticleSlide'
import SliderNavigation from './SliderNavigation'

const ArticleSlider = () => {

    const data = [
        {
            Title: 'Customer service job description examples and best practices',
            Img: 'https://hs-marketing.imgix.net/images/uploads/saas-customer-success.png?ixlib=gatsby-transform-url-1.0.2&fit=crop&w=340&h=191&auto=format%2Ccompress&ar=undefined&fm=webp&dpr=1&q=75'
        },
        {
            Title: 'Customer service job description examples and best practices',
            Img: 'https://hs-marketing.imgix.net/images/uploads/saas-customer-success.png?ixlib=gatsby-transform-url-1.0.2&fit=crop&w=340&h=191&auto=format%2Ccompress&ar=undefined&fm=webp&dpr=1&q=75'
        },
        {
            Title: 'Customer service job description examples and best practices',
            Img: 'https://hs-marketing.imgix.net/images/uploads/saas-customer-success.png?ixlib=gatsby-transform-url-1.0.2&fit=crop&w=340&h=191&auto=format%2Ccompress&ar=undefined&fm=webp&dpr=1&q=75'
        }
    ]

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
            
            `}</style>
        </>
    )
}

export default ArticleSlider