// Theme
import { desktopMaxWidth } from 'styles/theme'

const AllBlogPosts = () => {
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
                    display: grid;
                    grid-template-columns: repeat(3, minmax(100px, 1fr));
                    column-gap: 20px;
                }
            `}</style>
        </>
    )
}

export default AllBlogPosts