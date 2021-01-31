import Link from 'next/link'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-white.svg'
// Theme
import { colors, desktopMaxWidth } from 'styles/theme'

const SimpleHeader = () => {
    return (
        <>
            <header>
                <nav>
                    <Link href="/" >
                        <a className="logoLink" >
                            <img className="navLogo" alt="standard-logo-horizontal" src={Logo} />
                        </a>
                    </Link>
                </nav>
            </header>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: center;
                }
                nav {
                    min-height: 90px;
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: flex;
                    padding: 21px 0px;
                }
                .navLogo {
                    width: 250px;
                }
                .logoLink {
                    margin: 0px 25px 0px 0px;
                    padding: 5px 0px 10px;
                }
            `}</style>
        </>
    )
}

export default SimpleHeader