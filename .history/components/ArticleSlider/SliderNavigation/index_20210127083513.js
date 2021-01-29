import { colors } from "styles/theme"

const SliderNavigation = ({ slidesData }) => {

    const NavItem = ({ slideNumber }) => {
        return (
            <li className="carousel__navigation-item">
                <a href={`#carousel__slide${slideNumber}`}
                className="carousel__navigation-button">Go to slide 1</a>
            </li>
        )
    }

    return (
        <>
            <aside className="carousel__navigation">
                <ol className="carousel__navigation-list">
                    {slidesData.map((slide, index) => {
                        return <NavItem slideNumber={index + 1} key={index} />
                    })}
                </ol>
            </aside>
            <style jsx>{`
                .carousel__navigation {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    text-align: center;
                }
                .carousel__navigation-list,
                .carousel__navigation-list :global(.carousel__navigation-item) {
                    display: inline-block;
                }
                .carousel__navigation-list :global(.carousel__navigation-button) {
                    display: inline-block;
                    width: 1.5rem;
                    height: 1.5rem;
                    background-color: ${colors.lightGray};
                    opacity: 0.35;
                    background-clip: content-box;
                    border: 0.25rem solid transparent;
                    border-radius: 50%;
                    font-size: 0;
                    transition: transform 0.1s;
                    transition: 0.3s ease-out all;
                }
                .carousel__navigation-list:hover :global(.carousel__navigation-button) {
                    opacity: 0.65;
                }
            `}</style>
        </>
    )
}

export default SliderNavigation