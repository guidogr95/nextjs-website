// Utils
import customizeHtmlContent from 'utils/customizeHtmlContent'
// Theme
import { colors, desktopMaxWidth } from 'styles/theme'
// Components
import PublicationAuthorDescription from './PublicationAuthorDescription'
import NewsLetterSignup from './NewsletterSignup'

const PublicationContent = ({ Content, Author }) => {
    return (
        <>
            <section className="containerSection" >
                <main>
                    <aside>
                        { Author?.description && <PublicationAuthorDescription description={Author.description} /> }
                        <NewsLetterSignup />
                    </aside>
                    <article className="htmlContent" dangerouslySetInnerHTML={{ __html: customizeHtmlContent(Content) }} />
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    padding: 40px;
                    display: grid;
                    grid-template-columns: 270px auto;
                    column-gap: 150px;
                    width: 100%;
                }
                aside {
                    display: flex;
                    flex-direction: column;
                }
                article {
                    max-width: 770px;
                }
                article :global(figure img) {
                    width: 100%;
                }
                article :global(p),
                article :global(figure),
                article :global(h1),
                article :global(h2),
                article :global(h3),
                article :global(h4),
                article :global(h5),
                article :global(h6) {
                    margin-top: 0.46em;
                    margin-bottom: 0.46em;
                }
                article :global(figure.image) {
                    margin-left: auto;
                    margin-right: auto;
                }
                article :global(p) {
                    font-size: 18px;
                    line-height: 1.58;
                    letter-spacing: -.003em;
                    color: ${colors.textGray};
                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                    display: inline-block;
                }
                article :global(h1),
                article :global(h2),
                article :global(h3),
                article :global(h4),
                article :global(h5),
                article :global(h6) {
                    line-height: 1.3;
                    font-weight: 600;
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
                article :global(blockquote) {
                    background: whitesmoke;
                    border-radius: 2px;
                    padding: 5px 10px;
                }
                article :global(blockquote p) {
                    display: block;
                }
            `}</style>
        </>
    )
}

export default PublicationContent