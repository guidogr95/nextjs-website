import Link from 'next/link'
// Assets
import { FiChevronDown } from 'react-icons/fi'
// Theme
import { colors } from 'styles/theme'
// Constants
import { host, prodHost } from 'config/constants'

const NavButton = ({ slug, label, submenu }) => {
    return (
        <>
            <li className="menuItem-parent" >
                <Link href={process.env.NODE_ENV === 'development' ? `${host}/${slug}` : `${prodHost}/${slug}`}>
                    <a className="menuItem main capitalize" >
                        <span>{label}</span>{submenu && <FiChevronDown />}
                    </a>
                </Link>
                <div className="dropdown dropdown1" >
                    <div className="bio" >
                        <span>Hello</span>
                        <span>Hello</span>
                        <span>Hello</span>
                        <span>Hello</span>
                        <span>Hello</span>
                        <span>Hello</span>
                        <span>Hello</span>
                        <span>Hello</span>
                    </div>
                </div>
            </li>
            <style jsx>{`
                .menuItem-parent {
                    position: relative;
                    display: flex;
                    justify-content: center;
                }
                .menuItem {
                    padding: 13px 20px;
                    text-transform: capitalize;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${colors.lightGray};
                    transition: .3s ease-out all;
                }
                .menuItem :global(svg) {
                    margin-left: 4px;
                }
                .menuItem:hover {
                    color: ${colors.day};
                }
                .dropdown {
                    opacity: 0;
                    position: absolute;
                    overflow: hidden;
                    padding: 20px;
                    top: -20px;
                    border-radius: 2px;
                    transition: all 0.5s;
                    transform: translateY(100px);
                    will-change: opacity;
                    display: none;
                    border: 2px solid green;
                }
                .trigger-enter .dropdown {
                    display: block;
                }
                .trigger-enter-active .dropdown {
                    opacity: 1;
                }
                .dropdown a {
                    text-decoration: none;
                    color: #ffc600;
                }
            `}</style>
        </>
    )
}

export default NavButton