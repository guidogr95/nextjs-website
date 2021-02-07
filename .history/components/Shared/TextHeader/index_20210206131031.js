// Theme
import { colors, desktopMaxWidth } from 'styles/theme'

const TextHeader = ({ ComponentProps }) => {

    const {
        Title,
        Subtitle,
        Background,
        TextAlignment,
        CTA,
        TitleColor,
        SubtitleColor
    } = ComponentProps

    return (
        <>
            <section>
                <header>
                    {Subtitle && <h2>{Subtitle}</h2>}
                    <h1>{Title}</h1>
                </header>
            </section>
            <style jsx>{`
                section {
                    display: flex;
                    justify-content: center;
                    height: 350px;
                    background: ${Background || 'linear-gradient(to right, #8e2de2, #4a00e0)'};
                }
                header {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(2, 50%);
                    align-items: center;
                    color: ${colors.whiteGray};
                }
                h1 {
                    margin-bottom: 20px;
                    letter-spacing: 0.07em;
                    opacity: 0.8;
                    font-weight: 900;
                    text-align: right;
                    font-size: 5.4em;
                    ${TitleColor && `color: ${TitleColor};`};
                }
                h2 {
                    ${SubtitleColor && `color: ${SubtitleColor};`}
                }
            `}</style>
        </>
    )
}

export default TextHeader