// Components
import NavButton from 'components/NavBar/NavButton'

const NavMenu = ({ navButtons }) => {
    return (
        <>
            <ul>
                {navButtons.map(button => (
                    <NavButton
                        key={button.Slug}
                        slug={button.Slug}
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