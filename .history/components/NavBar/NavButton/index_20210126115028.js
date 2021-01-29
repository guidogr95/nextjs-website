import Link from 'next/link'
// Assets
import { FiChevronDown } from 'react-icons/fi'

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
            }
        `}</style>
    </>
  )

export default NavButton