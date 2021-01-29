// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import BlogPostCard from 'components/Shared/BlogPostCard'

const AllBlogPosts = ({ Blogs }) => {

    console.log(Blogs)

    return (
        <>
            <section className="containerSection" >
                <main>
                    <BlogPostCard />
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    display: grid;
                    grid-template-columns: repeat(3, minmax(100px, 1fr));
                    column-gap: 40px;
                    row-gap: 40px;
                    width: 100%;
                    padding: 50px 0;
                }
            `}</style>
        </>
    )
}

export default AllBlogPosts