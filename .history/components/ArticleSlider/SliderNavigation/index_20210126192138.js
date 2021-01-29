const SliderNavigation = ({ slideData }) => {

    const NavItem = ({ slideNumber }) => {
        return (
            <li className="carousel__navigation-item">
                <a href={`#carousel__slide${slideNumber}`}
                className="carousel__navigation-button">Go to slide 1</a>
            </li>
        )
    }

    return (
        <aside className="carousel__navigation">
            <ol className="carousel__navigation-list">
                {slideData.map((slide, index) => {
                    return <NavItem slideNumber={index + 1} key={index} />
                })}
            </ol>
        </aside>
    )
}

export default SliderNavigation