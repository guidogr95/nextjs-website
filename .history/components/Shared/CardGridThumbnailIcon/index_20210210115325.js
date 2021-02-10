// Theme
import { desktopMaxWidth } from 'styles/theme'

const CardGridThumbnailIcon = ({ ComponentProps }) => {
    console.log(ComponentProps)
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