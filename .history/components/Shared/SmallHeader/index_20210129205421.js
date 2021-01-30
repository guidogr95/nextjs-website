// Theme
import { colors, desktopMaxWidth } from 'styles/theme'
// Assets
import Banner from 'public/assets/media/images/banner1.svg'

const SmallHeader = () => {
    return (
        <>
            <header>
                <main>
                    <h1>whitepapers & ebooks</h1>
                </main>
            </header>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: center;
                    background: url(${Banner});
                    background-size: cover;
                    background-repeat: no-repeat;
                    height: 350px;
                }
                h1 {
                    text-transform: capitalize;
                    color: ${colors.whiteGray};
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