import { desktopMaxWidth } from "styles/theme"

const CardGridThumbnailIcon = ({}) => {
    return (
        <>
            <section className="containerSection" >
                <main>
                    Hello
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default CardGridThumbnailIcon