// Theme
import { colors, desktopMaxWidth } from 'styles/theme'
// Assets
import { apiUrl } from 'utils/constants'

const SmallHeader = ({ Title, Subtitle, Image, TitleColor, SubtitleColor, Background }) => {
    return (
        <>
            <header>
                <aside>
                    <main>
                        <div className="textContent" >
                            <h1>{Title}</h1>
                            <h5>{Subtitle}</h5>
                        </div>
                    </main>
                </aside>
                <div className="imgContent" >
                    <img alt="ebooks" src={`${apiUrl}${Image.url}`} />
                </div>
            </header>
            <style jsx>{`
                header {
                    display: flex;
                    height: 600px;
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
                }
                h5 {
                    font-weight: 100;
                    line-height: 1.4;
                    color: ${SubtitleColor || colors.whiteGray};
                    padding-right: 15%;
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
                    margin: 10px 0;
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
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default SmallHeader