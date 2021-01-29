// Theme
import { desktopMaxWidth } from 'styles/theme'

const BlogHeader = ({ Title, Author, Thumbnail, BackgroundColor }) => {
    return (
        <>
            <section>
                <header>
                    <aside className="header-text" >
                        <h1>

                        </h1>
                    </aside>
                    <aside className="header-image" >
                        <img alt="blogPost thumbnail" />
                    </aside>
                </header>
            </section>
            <style jsx>{`
                section {
                    background: ${BackgroundColor || 'white'};
                    display: flex;
                    justify-content: center;
                    height: 450px;
                }
                header {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .header-text {
                    padding-left: 8.3%;
                    max-width: 62%;
                    position: relative;
                }
                .header-text h1 {
                    font-size: 3em;
                    text-transform: capitalize;
                    font-weight: normal;
                    margin: 0;
                    font-weight: 600;
                }
                .header-image {
                    flex: 0 0 100%;
                    margin: 50px auto;
                    max-width: 562px;
                    width: 100%;
                }
                .header-image {
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default BlogHeader