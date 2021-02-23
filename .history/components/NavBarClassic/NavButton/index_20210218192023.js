import { useEffect } from 'react'
// Utils
import Link from 'next/link'
import getPaths from 'utils/getPaths'
// Assets
import { FiChevronDown } from 'react-icons/fi'
import { RiArrowDropRightFill } from 'react-icons/ri'
// Theme
import { colors } from 'styles/theme'
// Constants
import { host, prodHost } from 'config/constants'

const NavButton = ({ slug, label, submenu, index, linkType }) => {

    useEffect(() => {
        // const dropdown = document.getElementById(`dropdown${index + 1}`)
        // const navItem = document.getElementById(`navItem${index + 1}`)

        // const firstNavItem = document.getElementById('navItem1')
        // // dropdown.style.left
        // if (submenu.length === 0) return
        // if (submenu.length === 1) {
        //     dropdown.style.left = `${navItem.offsetLeft}px`
        //     dropdown.style.width = '200px'
        // }
        // if (submenu.length > 1) {
        //     dropdown.style.left = `${firstNavItem.offsetWidth}px`
        //     dropdown.style.width = `calc(100% - ${firstNavItem.offsetWidth}px)`
        // }
    }, [])

    return (
        <>
            <li className="menuItem-parent" id={`navItem${index + 1}`} >
                <Link
                    prefetch={false}
                    href={`${linkType === 'Custom' ? slug : process.env.NODE_ENV === 'development' ? `${host}${slug}` : `${prodHost}${slug}`}`}
                >
                    <a className="menuItem main" >
                        <span>{label}</span>{(submenu && submenu?.length > 0) && <FiChevronDown />}
                    </a>
                </Link>
                {/* { (submenu && submenu?.length > 0) &&
                    <div className="dropdown" id={`dropdown${index + 1}`} >
                        {submenu.map((item, index) => {
                            if (!item?.SubMenuItem || !item?.SubMenuItem?.length > 0) return null
                            return (
                                <ul key={index} >
                                    {item.Label && <div className="submenu-label" >{item.Label}</div>}
                                    {item.SubMenuItem.map((subItem, i) => {
                                        const fullSlug = subItem.LinkType === 'Custom' ? subItem?.CustomLink || '/' : Object.keys(subItem?.Page || {}).length === 0 ? '/' : getPaths(subItem.Page, true)
                                        return (
                                            <li key={i} >
                                                <Link prefetch={false} href={`${fullSlug || '/'}`} >
                                                    <a>
                                                        <RiArrowDropRightFill/> <span>{subItem.Label}</span>
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })}

                                </ul>
                            )
                        })}
                    </div>
                } */}
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
                .dropdown ul {
                    width: ${submenu.length > 1 ? '50%' : '100%'};
                    padding: ${submenu.length > 1 ? '29px 0' : '0'};
                }
                .dropdown {
                    opacity: 0;
                    position: absolute;
                    overflow: hidden;
                    top: 100%;
                    border-radius: 2px;
                    transition: all 0.5s;
                    border-top: 3px solid ${colors.day};
                    will-change: opacity;
                    z-index: 2;
                    width: 200px;
                    background: white;
                    display: flex;
                    visibility: hidden;
                }
                .menuItem-parent:hover .dropdown {
                    opacity: 1;
                    visibility: visible;
                }
                .dropdown li {
                    white-space: nowrap;
                    font-stretch: semi-expanded;
                    display: flex;
                    align-items: center;
                }
                .dropdown li :global(svg) {
                    font-size: 1.8em;
                    display: ${submenu.length > 1 ? 'initial' : 'none'}
                }
                .dropdown li a {
                    padding: ${submenu.length > 1 ? '5px 34px' : '5px 20px'};
                    width: 100%;
                    display: block;
                    font-size: 13px;
                    color: #2a1659;
                    letter-spacing: 0.01em;
                    transition: .3s ease-out all;
                }
                .dropdown li a:hover {
                    background: #f8f8f8;
                }
                .submenu-label {
                    letter-spacing: 0.02em;
                    color: ${colors.lightGray};
                    padding: 0 34px 15px 34px;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: semi-expanded;
                }
                @media screen and (max-width: 1090px) {
                    ul {
                        max-height: 10000px;
                        overflow: hidden;
                        flex-direction: column;
                        width: 100%;
                    }
                    .menuItem {
                        width: 100%;
                        height: 50px;
                    }
                    .menuItem :global(svg) {
                        position: absolute;
                    }
                }
            `}</style>
        </>
    )
}

export default NavButton