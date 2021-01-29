import NavButton from './NavButton'
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'

const NavBar = () => {
    return (
        <>
            <nav>
                <img alt="standard-logo-horizontal" src={Logo} />
            </nav>
            <style jsx>{`
                nav {
                    min-height: 90px;
                }
            `}</style>
        </>
    )
}

export default NavBar