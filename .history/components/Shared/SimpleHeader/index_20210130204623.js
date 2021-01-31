import Link from 'next/link'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-white.svg'
// Theme
import { desktopMaxWidth } from 'styles/theme'

const SimpleHeader = ({ Title, Subtitle }) => {
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
                <div>
                    <h3>{Title}</h3>
                    <h4>{Subtitle}</h4>
                </div>
            </header>
            <style jsx>{`
                header {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background: white;
                    height: 450px;
                }
                div {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
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