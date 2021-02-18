import Link from 'next/link'
// Components
import NavMenu from './NavMenu'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'
import { FaUserPlus, FaInfoCircle, FaSignInAlt } from 'react-icons/fa'
// Theme
import { colors } from 'styles/theme'

const NavBar = ({ navButtons }) => {

    return (
        <>
            <div className="navContainer" >
                <div className="secondary-nav-wrapper" >
                    <div className="secondary-nav" >
                        <div className="sec-item" >
                            <a href="https://vexxhost.com/contact-us/" rel="noopener noreferer" >
                                Contact Us
                            </a>
                        </div>
                        <div className="sec-item" >
                            <a href="https://status.vexxhost.com/" rel="noopener noreferer" >
                                <FaInfoCircle />
                                <span>Status</span>
                            </a>
                        </div>
                        <div className="sec-item" >
                            <a href="https://secure.vexxhost.com/billing/register.php?flow=cloudconsole" rel="noopener noreferer" >
                                <FaUserPlus />
                                <span>Sign Up</span>
                            </a>
                        </div>
                        <div className="sec-item" >
                            <a href="https://secure.vexxhost.com/billing/clientarea.php" rel="noopener noreferer" >
                                <FaSignInAlt />
                                <span>Sign In</span>
                            </a>
                        </div>
                    </div>
                </div>
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
                .secondary-nav-wrapper {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    padding-left: 30px;
                    padding-right: 30px;
                    border-bottom: 1px solid #e5e5e5;
                }
                .sec-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 52px;
                    padding: 0 13px;
                    color: ${colors.day};
                    font-weight: bold;
                    border-right: 1px solid #e5e5e5;
                }
                .sec-item:last-of-type {
                    border-right: none;
                }
                .sec-item a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    letter-spacing: 0.01em;
                }
                .sec-item :global(svg) {
                    margin-right: 8px;
                    font-size: 1em;
                }
                .navContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: white;
                    position: relative;
                    overflow: visible;
                    backface-visibility: hidden;
                    transition: background-color .25s ease-in-out;
                    border-bottom: 1px solid transparent;
                    font-family: Arial;
                    font-stretch: condensed;
                }
                nav {
                    max-width: 1100px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 91px;
                }
                .secondary-nav {
                    max-width: 1100px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
                .navLogo {
                    width: 275px;
                }
            `}</style>
        </>
    )
}

export default NavBar