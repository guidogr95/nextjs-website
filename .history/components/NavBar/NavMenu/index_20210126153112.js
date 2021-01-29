// Components
import NavButton from 'components/NavBar/NavButton'

const NavMenu = ({ navButtons }) => {
    console.log(navButtons)
    return (
        <>
            <ul>
                {navButtons.map(button => (
                    <NavButton
                        key={button.path}
                        path={button.path}
                        label={button.label}
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