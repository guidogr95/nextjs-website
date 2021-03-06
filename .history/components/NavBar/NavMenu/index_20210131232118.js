// Components
import NavButton from 'components/NavBar/NavButton'

const NavMenu = ({ navButtons }) => {
    return (
        <>
            <ul className="cool" >
                {navButtons && navButtons.map((button, index) => (
                    <NavButton
                        key={button?.Page?.Slug || index}
                        slug={button?.Page?.Slug || '/'}
                        label={button.Label}
                        submenu={true}
                    />
                ))}
            </ul>
            <style jsx>{`
                ul {
                    display: flex;
                    list-style: none;
                }
            `}</style>
        </>
    )
}

export default NavMenu