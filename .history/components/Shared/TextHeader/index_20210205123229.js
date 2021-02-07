import { colors, desktopMaxWidth } from "styles/theme"

const TextHeader = ({ Title, Subtitle, Background, CTA }) => {
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
                    height: 400px;
                    background: ${Background || 'linear-gradient(to right, #8e2de2, #4a00e0)'};
                }
                header {
                    max-width: ${desktopMaxWidth};
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    color: ${colors.whiteGray};
                }
            `}</style>
        </>
    )
}

export default TextHeader