import { useEffect, useRef, useState } from 'react'
// Theme
import { colors, desktopMaxWidth } from 'styles/theme'
// Assets
import { apiUrl } from 'config/constants'
// Utils
import renderIllustration from 'utils/renderIllustration'
import useOnScreen from 'utils/useOnScreen'
import { animated, animations } from 'utils/springHelpers'

const { enterRight } = animations

const SmallHeader = ({ ComponentProps }) => {

    const { Title, Subtitle, Image, TitleColor, SubtitleColor, Background, HeaderImage } = ComponentProps

    const ref = useRef()
    const [show, setShow] = useState(false)

    const onScreen = useOnScreen(ref, '-250px')

    useEffect(() => {
        (!show && onScreen) && setShow(true)
    }, [onScreen])

    return (
        <>
            <header ref={ref} >
                <aside>
                    <main>
                        {show &&
                            <div
                                className="textContent"
                                style={enterRight}
                            >
                                <h1>{Title}</h1>
                                <h4>{Subtitle}</h4>
                            </div>
                        }
                    </main>
                </aside>
                {show &&
                    <div className="imgContent" >
                        {!HeaderImage || HeaderImage === 'Custom'
                            ? <img alt={Title} src={`${apiUrl}${Image.url}`} />
                            : renderIllustration(HeaderImage)}
                    </div>
                }
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
                .imgContent img,
                .imgContent :global(svg) {
                    height: 100%;
                }
            `}</style>
        </>
    )
}

export default SmallHeader