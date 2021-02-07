import { useEffect, useState } from 'react'
// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import BlogPostCard from 'components/Shared/BlogPostCard'
// Constants
import { apiUrl } from 'config/constants'
// Utils
import Pagination from '@bit/nexxtway.react-rainbow.pagination'
import uuidv4 from 'uuid'

const AllBlogPosts = ({ Blogs }) => {

    const [activePage, setActivePage] = useState(1)
    const [paginatedBlogs, setPaginatedBlogs] = useState(null)

    const itemsPerPage = 9
    const pages = Math.ceil(Blogs.length / itemsPerPage)

    const handlePagination = (event, page) => {
        const firstItem = 0 + (itemsPerPage * (activePage - 1))
        const lastItem = itemsPerPage * activePage
        setActivePage(page)
        setPaginatedBlogs([...Blogs.slice(firstItem, lastItem)])
    }

    useEffect(() => {
        setPaginatedBlogs([...Blogs.slice(0, itemsPerPage)])
    }, [])

    return (
        <>
            <section className="containerSection" >
                <main>
                    <h2 className="sectionTitle" >Latest Articles</h2>
                    <aside>
                        {paginatedBlogs && paginatedBlogs.map(blog => {
                            return (
                                <BlogPostCard
                                    key={uuidv4()}
                                    Title={blog.Title}
                                    PublicationDate={blog.published_at}
                                    Author={blog.Publisher}
                                    Thumbnail={`${apiUrl}${blog.Thumbnail.formats.small.url}`}
                                    Slug={blog.Slug}
                                />
                            )
                        })}
                    </aside>
                    <Pagination
                        className="rainbow-m_auto"
                        pages={pages}
                        activePage={activePage}
                        onChange={handlePagination}
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