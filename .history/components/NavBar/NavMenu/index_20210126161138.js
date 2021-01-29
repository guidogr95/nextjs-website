// Components
import NavButton from 'components/NavBar/NavButton'

const NavMenu = ({ navButtons }) => {
    return (
        <>
            <ul>
                {navButtons.map((button, index) => (
                    <NavButton
                        key={button?.Page?.Slug || index}
                        slug={button?.Page?.Slug || index}
                        label={button.Label}
                        submenu={true}
                    />
                ))}
            </ul>
            <style jsx>{`
                ul {
                    display: flex;
                    list-style: none;
                    padding: 0;
                }
            `}</style>
        </>
    )
}

export default NavMenu