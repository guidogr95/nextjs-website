import { desktopMaxWidth } from "styles/theme"

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
                    height: 450px;
                }
                header {
                    max-width: ${desktopMaxWidth};
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </>
    )
}

export default TextHeader