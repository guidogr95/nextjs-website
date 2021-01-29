// Components
import NavButton from './NavButton'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'
// Theme
import { desktopMaxWidth } from 'styles/theme'

const NavBar = () => {
    return (
        <>
            <div className="navContainer" >
                <nav>
                    <a href="/" >
                        <img className="navLogo" alt="standard-logo-horizontal" src={Logo} />
                    </a>
                </nav>
            </div>
            <style jsx>{`
                .navContainer {
                    display: flex;
                    justify-content: center;
                }
                nav {
                    min-height: 90px;
                    max-width: ${desktopMaxWidth};
                }
                .navLogo {
                    width: 152px;
                }
            `}</style>
        </>
    )
}

export default NavBar