// Theme
import { desktopMaxWidth } from 'styles/theme'
// Assets
import Banner from 'public/assets/media/images/banner1.svg'

const SmallHeader = () => {
    return (
        <>
            <header>
                <main>
                    <h2>whitepapers & ebooks</h2>
                </main>
            </header>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: center;
                    background: ${Banner};
                    background-size: cover;
                    background-repeat: no-repeat;
                    height: 400px;
                }
                h2 {
                    text-transform: capitalize;
                }
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            `}</style>
        </>
    )
}

export default SmallHeader