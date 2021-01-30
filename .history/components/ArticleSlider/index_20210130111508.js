// Components
import ArticleSlide from './ArticleSlide'
import SliderNavigation from './SliderNavigation'
// Utils
import Carousel from 'react-bootstrap/Carousel'

const ArticleSlider = ({ MaxPosts, Blogs }) => {

    const data = Blogs.filter(blog => blog.Featured).slice(0, MaxPosts || 1)

    return (
        <>
            <section className="carousel" aria-label="Gallery">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
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