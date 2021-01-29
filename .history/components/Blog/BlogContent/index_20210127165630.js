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
                    padding: 40px;
                }
                article :global(p) {
                    margin-top: 29px;
                    font-size: 21px;
                    line-height: 1.58;
                    letter-spacing: -.003em;
                    color: rgba(0,0,0,.8);
                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                }
                article :global(h2) {
                    font-size: 30px;
                    line-height: 1.5px;
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