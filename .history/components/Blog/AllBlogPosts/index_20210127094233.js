// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import BlogPostCard from 'components/Shared/BlogPostCard'

const AllBlogPosts = () => {
    return (
        <>
            <section className="containerSection" >
                <main>
                    <BlogPostCard />
                    <BlogPostCard />
                    <BlogPostCard />
                    <BlogPostCard />
                    <BlogPostCard />
                    <BlogPostCard />
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    display: grid;
                    grid-template-columns: repeat(3, minmax(100px, 1fr));
                    column-gap: 20px;
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default AllBlogPosts