// Utils
import marked from 'marked'
// Theme
import { desktopMaxWidth } from 'styles/theme'

const BlogContent = ({ Content }) => {
    return (
        <>
            <section className="sectionContainer" >
                <main>
                    <article dangerouslySetInnerHTML={marked(Content, { sanitize: true })} />
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