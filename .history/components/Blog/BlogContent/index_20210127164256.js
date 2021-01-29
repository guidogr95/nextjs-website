// Utils
import marked from 'marked'
// Theme
import { desktopMaxWidth } from 'styles/theme'

// const createMarkup = (content) => {
//     return {__html: marked(Content, { sanitize: true })
// }

const BlogContent = ({ Content }) => {
    return (
        <>
            <section className="sectionContainer" >
                <main>
                    <article dangerouslySetInnerHTML={{ __html: marked(Content) }} />
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                }
            `}</style>
        </>
    )
}

export default BlogContent