// Components
import NavButton from '../NavButton'
import getPaths from 'utils/getPaths'

const NavMenu = ({ navButtons }) => {
    return (
        <>
            <ul className="cool" id="navbar">
                {navButtons && navButtons.map((button, index) => {
                    const fullSlug = button.LinkType === 'Custom' ? button?.CustomLink || '/' : button?.Page ? getPaths(button?.Page, true) : '/'
                    return (
                        <NavButton
                            key={button?.Page?.Slug || index}
                            slug={fullSlug}
                            label={button.Label}
                            submenu={button?.NavSubmenu}
                            index={index}
                            linkType={button.LinkType}
                        />
                    )
                })}
            </ul>
            <style jsx>{`
                ul {
                    display: flex;
                    list-style: none;
                    height: 100%;
                    position: relative;
                    transition: .4s linear all;
                }
                @media screen and (max-width: 1090px) {
                    ul {
                        display: none;
                        flex-direction: column;
                        width: 100%;
                    }
                    ul.active {
                        display: flex;
                        margin-bottom: 10px;
                    }
                    ul.opening {
                        display: flex;
                        height: 234px;
                        margin-bottom: 5px;
                    }
                    ul.closing {
                        display: flex;
                        height: 50px;
                        margin-bottom: 5px;
                    }
                }
            `}</style>
        </>
    )
}

export default NavMenu