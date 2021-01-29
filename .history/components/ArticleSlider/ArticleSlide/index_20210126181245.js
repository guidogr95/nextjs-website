const ArticleSlide = ({ slideNumber, slidesLength }) => {
    return (
        <>
            <li id={`carousel__slide${slideNumber}`}
                tabIndex="0"
                className="carousel__slide">
            <div className="carousel__snapper">
                <a href={`#carousel__slide${slideNumber === 1 ? slidesLength : slideNumber - 1}`}
                className="carousel__prev">Go to last slide</a>
                <a href={`#carousel__slide${slideNumber + 1}`}
                className="carousel__next">Go to next slide</a>
            </div>
            </li>
            <style jsx>{`
            `}</style>
        </>
    )
}

export default ArticleSlide