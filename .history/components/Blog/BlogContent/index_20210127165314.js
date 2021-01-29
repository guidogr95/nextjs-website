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
            <section className="containerSection" >
                <main>
                    <article dangerouslySetInnerHTML={{ __html: marked(Content) }} />
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    padding: 40px 0;
                }
                article :global(p) {
                    display: flex;
                    justify-content: center;
                }
                article :global(a) {
                    color: -webkit-link;
                }
                article :global(a):hover {
                    text-decoration: underline;
                }
            `}</style>
        </>
    )
}

export default BlogContent