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
                    <h1>{Title}</h1>
                    {Subtitle && <h2>{Subtitle}</h2>}
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
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: ${TextAlignment === 'center' ? 'center' : TextAlignment === 'left' ? 'flex-start' : TextAlignment === 'right' ? 'flex-end' : 'center'};
                    text-align: ${TextAlignment || 'center'};
                    color: ${colors.whiteGray};
                }
                h1 {
                    margin-bottom: 20px;
                    letter-spacing: 0.02em;
                    font-weight: 600;
                    ${TitleColor && `color: ${TitleColor};`};
                }
            `}</style>
        </>
    )
}

export default TextHeader