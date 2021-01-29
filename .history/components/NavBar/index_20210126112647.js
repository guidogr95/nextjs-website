import NavButton from './NavButton'
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'

const NavBar = () => {
    return (
        <>
            <nav>
                <a href="/" >
                    <img className="navLogo" alt="standard-logo-horizontal" src={Logo} />
                </a>
            </nav>
            <style jsx>{`
                nav {
                    min-height: 90px;
                }
                .navLogo {
                    width: 152px;
                }
            `}</style>
        </>
    )
}

export default NavBar