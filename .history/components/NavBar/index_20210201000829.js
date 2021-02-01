import Link from 'next/link'
// Components
import NavMenu from './NavMenu'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'
// Theme
import { desktopMaxWidth } from 'styles/theme'
import { useEffect } from 'react'

const NavBar = ({ navButtons }) => {

    useEffect(() => {
        const triggers = document.querySelectorAll('.cool > li')
        const background = document.querySelector('.dropdownBackground')
        const nav = document.querySelector('.top')
        const logo = document.querySelector('.logoLink')

        const handleEnter = (e) => {
            const _this = e.target
            _this.classList.add('trigger-enter')
            setTimeout(() => _this.classList.add('trigger-enter-active'), 150)
            background.classList.add('open')

            const dropdown = _this.querySelector('.dropdown')
            const dropdownCoords = dropdown.getBoundingClientRect()
            const navCoords = nav.getBoundingClientRect()
            // const desktopWidth = 

            const coords = {
                height: dropdownCoords.height,
                width: dropdownCoords.width,
                top: dropdownCoords.top,
                left: dropdownCoords.left
            }

            background.style.setProperty('width', `${coords.width}px`)
            background.style.setProperty('height', `${coords.height}px`)
            // background.style.setProperty('transform', `translate(${coords.left - 70}px, ${coords.top}px)`)
        }

        const handleLeave = (e) => {
            const _this = e.target
            _this.classList.remove('trigger-enter', 'trigger-enter-active')
            background.classList.remove('open')
        }

        triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
        triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))

        return () => {
            triggers.forEach(trigger => trigger.removeEventListener('mouseenter', handleEnter))
            triggers.forEach(trigger => trigger.removeEventListener('mouseleave', handleLeave))
        }
    }, [])

    return (
        <>
            <div className="navContainer" >
                <nav className="top" >
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
                    margin-right: 25px;
                    padding: 5px 0px 10px;
                }
            `}</style>
        </>
    )
}

export default NavBar