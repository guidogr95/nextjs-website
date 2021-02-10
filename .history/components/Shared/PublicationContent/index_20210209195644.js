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
            `}</style>
        </>
    )
}

export default PublicationContent