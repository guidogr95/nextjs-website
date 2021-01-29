import Link from 'next/link'
// Assets
import { FiChevronDown } from 'react-icons/fi'
// Theme
import { colors } from 'styles/theme'
// Contants
import { apiUrl } from 'utils/constants'

const NavButton = ({ slug, label, submenu }) => {
    return (
        <>
            <li>
                <Link href={`${apiUrl}${slug}`}>
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