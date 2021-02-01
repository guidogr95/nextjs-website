// Components
import NavButton from 'components/NavBar/NavButton'

const NavMenu = ({ navButtons }) => {
    return (
        <>
            <ul className="cool" >
                <div className="dropdownBackground" >
                    <span className="arrow" />
                </div>
                {navButtons && navButtons.map((button, index) => (
                    <NavButton
                        key={button?.Page?.Slug || index}
                        slug={button?.Page?.Slug || '/'}
                        label={button.Label}
                        submenu={true}
                    />
                ))}
            </ul>
            <style jsx>{`
                .dropdownBackground {
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    background: #fff;
                    border-radius: 4px;
                    box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
                    transition: all 0.3s, opacity 0.1s, transform 0.2s;
                    transform-origin: 50% 0;
                    display: flex;
                    justify-content: center;
                    opacity: 0;
                    z-index: 1;
                }
                .dropdownBackground.open {
                    opacity: 1;
                }
                .arrow {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    display: block;
                    background: white;
                    transform: translateY(-50%) rotate(45deg);
                }
                ul {
                    display: flex;
                    list-style: none;
                }
            `}</style>
        </>
    )
}

export default NavMenu