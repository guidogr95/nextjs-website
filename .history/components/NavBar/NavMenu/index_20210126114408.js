// Utils
import navButtons from 'config/buttons'
// Components
import NavButton from 'components/NavBar/NavButton'

const NavMenu = () => {
    return (
        <>
            <ul>
                {navButtons.map(button => (
                    <NavButton
                        key={button.path}
                        path={button.path}
                        label={button.label}
                        submenu={button.submenu}
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