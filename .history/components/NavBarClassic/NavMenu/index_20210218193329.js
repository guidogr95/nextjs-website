// Components
import NavButton from '../NavButton'
import getPaths from 'utils/getPaths'

const NavMenu = ({ navButtons, active }) => {
    return (
        <>
            <ul className={`cool ${active ? 'active' : 'inactive'}`} id="navbar">
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
                }
                @media screen and (max-width: 1090px) {
                    ul {
                        max-height: 0px;
                        overflow: hidden;
                        flex-direction: column;
                        width: 100%;
                        transition: .3s ease-out all;
                        margin-bottom: 5px;
                    }
                    ul.active {
                        max-height: 10000px;
                        margin-bottom: 2px;
                    }
                }
            `}</style>
        </>
    )
}

export default NavMenu