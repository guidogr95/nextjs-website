import Link from 'next/link'

const NavButton = props => (
    <>
        <Link href={props.path}>
        <div className="NavButton">
            <span className="Label">{props.label}</span>
        </div>
        </Link>
        <style jsx>{`
        `}</style>
    </>
  )

export default NavButton