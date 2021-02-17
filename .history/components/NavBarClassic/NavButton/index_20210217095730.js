import { useEffect } from 'react'
// Utils
import Link from 'next/link'
// Assets
import { FiChevronDown } from 'react-icons/fi'
// Theme
import { colors } from 'styles/theme'
// Constants
import { host, prodHost } from 'config/constants'
import getPaths from 'utils/getPaths'

const NavButton = ({ slug, label, submenu, index }) => {
    useEffect(() => {
        const navbar = document.getElementById('navbar')
        const dropdown = document.getElementById(`dropdown${index + 1}`)
        const navItem = document.getElementById(`navItem${index + 1}`)

        const firstNavItem = document.getElementById('navItem1')
        // dropdown.style.left
        if (submenu.length === 0) return
        if (submenu.length === 1) dropdown.style.left = `${navItem.offsetLeft}px`
        if (submenu.length > 1) dropdown.style.left = `${firstNavItem.offsetWidth}px`
    }, [])

    return (
        <>
            <li className="menuItem-parent" id={`navItem${index + 1}`} >
                <Link prefetch={false} href={process.env.NODE_ENV === 'development' ? `${host}${slug}` : `${prodHost}${slug}`}>
                    <a className="menuItem main" >
                        <span>{label}</span>{(submenu && submenu?.length > 0) && <FiChevronDown />}
                    </a>
                </Link>
                { (submenu && submenu?.length > 0) &&
                    <div className="dropdown" id={`dropdown${index + 1}`} >
                        {submenu.map((item, index) => {
                            if (!item?.SubMenuItem || !item?.SubMenuItem?.length > 0) return null
                            return (
                                <ul key={index} >
                                    {item.label && <div className="submenu-label" >{item.Label}</div>}
                                    {item.SubMenuItem.map((subItem, i) => {
                                        const fullSlug = Object.keys(subItem?.Page || {}).length === 0 ? '/' : getPaths(subItem.Page, true)
                                        return (
                                            <li key={i} >
                                                <Link prefetch={false} href={`${fullSlug || '/'}`} >
                                                    <a>
                                                        {subItem.Label}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })}

                                </ul>
                            )
                        })}
                    </div>
                }
            </li>
            <style jsx>{`
                .menuItem-parent {
                    display: flex;
                    justify-content: center;
                }
                .menuItem-parent ul {
                    list-style: none;
                }
                .menuItem {
                    padding-right: 35px;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: black;
                    transition: .3s ease-out all;
                    line-height: 1;
                    font-size: 1.05em;
                    letter-spacing: 0.0428em;
                }
                li:last-of-type .menuItem {
                    padding-right: 0;
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
                    top: 100%;
                    padding: 20px 40px;
                    border-radius: 2px;
                    transition: all 0.5s;
                    border-top: 2px solid ${colors.day};
                    will-change: opacity;
                    z-index: 2;
                    width: 200px;
                    background: white;
                }
                .menuItem-parent:hover .dropdown {
                    opacity: 1;
                }
                .dropdown ul:not(:first-of-type) {
                    margin-left: 40px;
                }
                .dropdown li {
                    white-space: nowrap;
                }
                .dropdown ul li:not(:last-of-type) {
                    margin-bottom: 10px;
                }
                .submenu-label {
                    font-weight: bold;
                    letter-spacing: 0.02em;
                    color: ${colors.lightGray};
                    margin-bottom: 15px;
                }
            `}</style>
        </>
    )
}

export default NavButton