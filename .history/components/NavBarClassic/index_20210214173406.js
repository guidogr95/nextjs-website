import Link from 'next/link'
// Components
import NavMenu from './NavMenu'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'
// Theme
import { desktopMaxWidth } from 'styles/theme'

const NavBar = ({ navButtons }) => {

    return (
        <>
            <div className="navContainer" >
                <nav className="top" >
                    <Link prefetch={false} href="/" >
                        <a className="logoLink" >
                            <img className="navLogo" alt="standard-logo-horizontal" src={Logo} />
                        </a>
                    </Link>
                    <NavMenu navButtons={navButtons} />
                </nav>
            </div>
            <style jsx>{`
                .navContainer {
                    display: flex;
                    justify-content: center;
                    background: white;
                    position: relative;
                    height: 91px;
                    overflow: visible;
                    padding-left: 30px;
                    padding-right: 30px;
                    backface-visibility: hidden;
                    transition: background-color .25s ease-in-out;
                    border-bottom: 1px solid transparent;
                }
                nav {
                    min-height: 101px;
                    max-width: 1100px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .navLogo {
                    width: 250px;
                }
                .logoLink {
                    margin-right: 25px;
                    padding: 5px 0px 10px;
                }
            `}</style>
        </>
    )
}

export default NavBar