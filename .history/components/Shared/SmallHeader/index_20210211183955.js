import { useEffect, useRef, useState } from 'react'
// Theme
import { colors, desktopMaxWidth } from 'styles/theme'
// Assets
import { apiUrl } from 'config/constants'
// Utils
import renderIllustration from 'utils/renderIllustration'
import useOnScreen from 'utils/useOnScreen'
// Context
import { useSpringUtils } from 'context/springContext'

const SmallHeader = ({ ComponentProps }) => {

    const { animated, config, Transition, animations } = useSpringUtils()

    const { Title, Subtitle, Image, TitleColor, SubtitleColor, Background, HeaderImage } = ComponentProps

    const ref = useRef()
    const [show, setShow] = useState(false)

    const onScreen = useOnScreen(ref, '-250px', !show)

    useEffect(() => {
        (!show && onScreen) && setShow(true)
    }, [onScreen])

    const HeaderText = (props) => (
        <animated.div
            className="textContent"
            style={props}
        >
            <h1>{Title}</h1>
            <h4>{Subtitle}</h4>
        </animated.div>
    )

    const Thumbnail = (props) => (
        <animated.img
            style={props}
            alt={Title}
            src={`${apiUrl}${Image.url}`}
        />
    )

    const thumbnailRender = () => (
        <Transition
            items={show}
            key={Title}
            config={{ ...config.wobbly, duration: 600 }}
            from={{ transform: 'translateY(40px)', opacity: 0 }}
            enter={{ transform: 'translateY(0px)', opacity: 1 }}
            leave={{ transform: 'translateY(40px)', opacity: 0 }}>
            {show => show && (props => <Thumbnail {...props} />)}
        </Transition>
    )

    return (
        <>
            <header ref={ref}>
                <aside>
                    <main>
                        <Transition
                            items={show}
                            key={Title}
                            config={{ ...config.wobbly, duration: 400 }}
                            from={{ transform: 'translateX(-60px)', opacity: 0 }}
                            enter={{ transform: 'translateX(0px)', opacity: 1 }}
                            leave={{ transform: 'translateX(-60px)', opacity: 0 }}>
                            {show => show && (props => <HeaderText {...props} />)}
                        </Transition>
                    </main>
                </aside>
                {show &&
                    <div className="imgContent" >
                        {!HeaderImage || HeaderImage === 'Custom'
                            ? thumbnailRender()
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
                header :global(aside) {
                    height: 450px;
                    background-size: cover;
                    background: ${Background || colors.night};
                    background-repeat: no-repeat;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                header :global(h1) {
                    color: ${TitleColor || colors.whiteGray};
                    margin-bottom: 20px;
                    letter-spacing: 0.02em;
                    font-weight: 600;
                }
                header :global(h4) {
                    font-weight: 100;
                    line-height: 1.5;
                    color: ${SubtitleColor || colors.whiteGray};
                    padding-right: 15%;
                    font-size: 1.4em;
                }
                header :global(main) {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                main :global(.textContent) {
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
                .imgContent :global(img),
                .imgContent :global(svg) {
                    height: 100%;
                }
            `}</style>
        </>
    )
}

export default SmallHeader