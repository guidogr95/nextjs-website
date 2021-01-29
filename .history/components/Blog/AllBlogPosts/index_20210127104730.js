// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import BlogPostCard from 'components/Shared/BlogPostCard'
// Constants
import { apiUrl } from 'utils/constants'

const AllBlogPosts = ({ Blogs }) => {

    console.log(Blogs)

    return (
        <>
            <section className="containerSection" >
                <main>
                    { Blogs.map(blog => {
                        return (
                            <BlogPostCard
                                key={blog.published_at}
                                Title={blog.Title}
                                PublicationDate={blog.published_at}
                                Author={blog.Publisher}
                                Thumbnail={`${apiUrl}${blog.Thumbnail.formats.small.url}`}
                            />
                        )
                    }) }
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