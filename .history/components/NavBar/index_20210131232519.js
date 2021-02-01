import Link from 'next/link'
// Components
import NavMenu from './NavMenu'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'
// Theme
import { desktopMaxWidth } from 'styles/theme'
import { useEffect } from 'react'

const NavBar = ({ navButtons }) => {

    const handleEnter = () => {
        console.log('enter')
    }

    const handleLeave = () => {
        console.log('leave')
    }
    useEffect(() => {
        const triggers = document.querySelectorAll('.cool > li')
        const background = document.querySelector('.dropdownBackground')
        const nav = document.querySelector('.top')

        triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
        triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
    }, [])

    return (
        <>
            <div className="navContainer" >
                <nav className="top" >
                    <div className="dropdownBackground" >
                        <span className="arrow" />
                    </div>
                    <Link href="/" >
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
                .logoLink {
                    margin: 0px 25px 0px 0px;
                    padding: 5px 0px 10px;
                }
            `}</style>
        </>
    )
}

export default NavBar