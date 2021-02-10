// Theme
import { colors, desktopMaxWidth } from 'styles/theme'
// Assets
import { apiUrl } from 'config/constants'

const SmallHeader = ({ ComponentProps }) => {

    const { Title, Subtitle, Image, TitleColor, SubtitleColor, Background } = ComponentProps

    return (
        <>
            <header>
                <aside>
                    <main>
                        <div className="textContent" >
                            <h1>{Title}</h1>
                            <h4>{Subtitle}</h4>
                        </div>
                    </main>
                </aside>
                <div className="imgContent" >
                    <img alt={Title} src={`${apiUrl}${Image.url}`} />
                </div>
            </header>
            <style jsx>{`
                header {
                    display: flex;
                    height: 550px;
                    position: relative;
                }
                aside {
                    height: 450px;
                    background-size: cover;
                    background: ${Background || colors.night};
                    background-repeat: no-repeat;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                h1 {
                    color: ${TitleColor || colors.whiteGray};
                    margin-bottom: 20px;
                    letter-spacing: 0.02em;
                    font-weight: 600;
                }
                h4 {
                    font-weight: 100;
                    line-height: 1.5;
                    color: ${SubtitleColor || colors.whiteGray};
                    padding-right: 15%;
                    font-size: 1.4em;
                }
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .textContent {
                    padding-left: 5%;
                    max-width: 62%;
                    position: relative;
                }
                .imgContent {
                    flex: 0 0 100%;
                    display: flex;
                    align-items: center;
                    width: 50%;
                    position: absolute;
                    bottom: 0;
                    top: 0;
                    right: 0;
                    padding-left: 5%;
                }
                .imgContent img {
                    height: 100%;
                }
            `}</style>
        </>
    )
}

export default SmallHeader