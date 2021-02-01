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

        const handleEnter = (e) => {
            console.log(this)
            // this.classList.add('trigger-enter')
            // setTimeout(() => this.classList.add('trigger-enter-active'), 150)
            background.classList.add('open')
        }

        const handleLeave = () => {
            // this.classList.remove('trigger-enter', 'trigger-enter-active')
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