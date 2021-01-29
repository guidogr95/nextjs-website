// Components
import NavButton from 'components/NavBar/NavButton'

const NavMenu = ({ navButtons }) => {
    return (
        <>
            <ul>
                {navButtons.map(button => (
                    <NavButton
                        key={button.Path}
                        path={button.Path}
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