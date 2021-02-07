import { useState } from 'react'
// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import BlogPostCard from 'components/Shared/BlogPostCard'
// Constants
import { apiUrl } from 'config/constants'
// Utils
import Pagination from '@bit/nexxtway.react-rainbow.pagination'

const AllBlogPosts = ({ Blogs }) => {

    const [activePage, setActivePage] = useState(1)

    const content = Blogs.concat(Blogs).concat(Blogs).concat(Blogs)

    const handleOnChange = (event, page) => {
        setActivePage(page)
    }

    const itemsPerPage = 9
    const pages = Math.ceil(content.length / itemsPerPage)
    const firstItem = 0 + (itemsPerPage * (activePage - 1))
    const lastItem = itemsPerPage * activePage

    const getContent = () => content.slice(firstItem, lastItem).map(blog => (
            <BlogPostCard
                key={blog.published_at}
                Title={blog.Title}
                PublicationDate={blog.published_at}
                Author={blog.Publisher}
                Thumbnail={`${apiUrl}${blog.Thumbnail.formats.small.url}`}
                Slug={blog.Slug}
            />
        )
    )

    return (
        <>
            <section className="containerSection" >
                <main>
                    <h2 className="sectionTitle" >Latest Articles</h2>
                    <aside>
                        {getContent()}
                    </aside>
                    <Pagination
                        className="rainbow-m_auto"
                        pages={pages}
                        activePage={activePage}
                        onChange={handleOnChange}
                    />
                </main>
            </section>
            <style jsx>{`
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    padding: 40px 0;
                }
                aside {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(100px, 1fr));
                    column-gap: 40px;
                    row-gap: 40px;
                }
            `}</style>
        </>
    )
}

export default AllBlogPosts