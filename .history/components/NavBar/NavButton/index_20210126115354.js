import Link from 'next/link'
// Assets
import { FiChevronDown } from 'react-icons/fi'
// Theme
import { colors } from 'styles/theme'

const NavButton = ({ path, label, submenu }) => (
    <>
        <li>
            <Link href={path}>
                <a className="menuItem main" >
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
            }
            .menuItem :global(svg) {
                margin-left: 5px;
            }
        `}</style>
    </>
  )

export default NavButton