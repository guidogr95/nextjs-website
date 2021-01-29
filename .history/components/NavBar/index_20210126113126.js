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
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: 21px 0px;
                }
                .navLogo {
                    width: 250px;
                }
            `}</style>
        </>
    )
}

export default NavBar