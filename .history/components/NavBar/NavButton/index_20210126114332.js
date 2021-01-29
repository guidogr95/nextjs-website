import Link from 'next/link'

const NavButton = props => (
    <>
        <li>
            <Link href={props.path}>
                <a>
                    {props.label}
                </a>
            </Link>
        </li>
        <style jsx>{`
        `}</style>
    </>
  )

export default NavButton