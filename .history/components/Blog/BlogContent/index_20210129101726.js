// Utils
import customizeHtmlContent from 'utils/customizeHtmlContent'
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
                    <article dangerouslySetInnerHTML={{ __html: customizeHtmlContent(Content) }} />
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    padding: 40px;
                }
                article {
                    max-width: 770px;
                }
                article :global(figure img) {
                    width: 100%;
                }
                article :global(p:not(:first-of-type)),
                article :global(figure:not(:first-of-type)),
                article :global(h1:not(:first-of-type), h2:not(:first-of-type), h3:not(:first-of-type), h4:not(:first-of-type), h5:not(:first-of-type), h6:not(:first-of-type) ) {
                    margin-top: 1em;
                    margin-bottom: 1em;
                }
                article :global(figure.image) {
                    margin-left: auto;
                    margin-right: auto;
                }
                article :global(p) {
                    font-size: 18px;
                    line-height: 1.58;
                    letter-spacing: -.003em;
                    color: #616266;
                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                    display: inline-block;
                    font-weight: normal;
                }
                article :global(h1, h2, h3, h4, h5, h6 ) {
                    line-height: 1.5;
                }
                article :global(h1) {
                    font-size: 50px;
                }
                article :global(h2) {
                    font-size: 30px;
                }
                article :global(h3) {
                    font-size: 25px;
                }
                article :global(h4) {
                    font-size: 22px;
                }
                article :global(h5) {
                    font-size: 18px;
                }
                article :global(h6) {
                    font-size: 15px;
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