import Link from 'next/link'
// Assets
import { FiChevronDown } from 'react-icons/fi'
// Theme
import { colors } from 'styles/theme'

const NavButton = ({ slug, label, submenu }) => {
    console.log(process.env.NODE_ENV)
    return (
        <>
            <li>
                <Link href={process.env.NODE_ENV === 'development' ? `http://localhost:3000/${slug}` : `https://vexxhost.com/${slug}`} prefetch={true} >
                    <a className="menuItem main capitalize" >
                        <span>{label}</span>{submenu && <FiChevronDown />}
                    </a>
                </Link>
            </li>
            <style jsx>{`
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
            `}</style>
        </>
    )
}

export default NavButton