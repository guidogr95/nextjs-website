import Link from 'next/link'
// Assets
import { FiChevronDown } from 'react-icons/fi'
// Theme
import { colors } from 'styles/theme'
// Constants
import { host, prodHost } from 'config/constants'
import getPaths from 'utils/getPaths'

const NavButton = ({ slug, label, submenu }) => {
    return (
        <>
            <li className="menuItem-parent" >
                <Link prefetch={false} href={process.env.NODE_ENV === 'development' ? `${host}${slug}` : `${prodHost}${slug}`}>
                    <a className="menuItem main" >
                        <span>{label}</span>{(submenu && submenu?.length > 0) && <FiChevronDown />}
                    </a>
                </Link>
                { (submenu && submenu?.length > 0) &&
                    <div className="dropdown" >
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
                    position: relative;
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
                    opacity: 1;
                    position: absolute;
                    overflow: hidden;
                    padding: 20px 40px;
                    top: -20px;
                    border-radius: 2px;
                    transition: all 0.5s;
                    transform: translateY(100px);
                    will-change: opacity;
                    z-index: 2;
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