import { useState } from 'react'
// Theme
import { desktopMaxWidth, breakpoints } from 'styles/theme'
// Components
import BlogPostCard from 'components/Shared/BlogPostCard'
// Constants
import { apiUrl } from 'config/constants'
// Utils
import Pagination from '@bit/nexxtway.react-rainbow.pagination'

const AllBlogPosts = ({ Blogs }) => {

    const [activePage, setActivePage] = useState(1)

    const itemsPerPage = 9
    const pages = Math.ceil(Blogs.length / itemsPerPage)

    const firstItem = 0 + (itemsPerPage * (activePage - 1))
    const lastItem = itemsPerPage * activePage

    const handlePagination = (event, page) => {
        setActivePage(page)
    }

    return (
        <>
            <section className="containerSection" >
                <main>
                    <h2 className="sectionTitle" >Latest Articles</h2>
                    <aside>
                        {Blogs.slice(firstItem, lastItem).map((blog, index) => {
                            return (
                                <BlogPostCard
                                    key={`${blog.published_at}${index}`}
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
                    grid-template-rows: repeat(3, 1fr);
                    column-gap: 40px;
                    row-gap: 40px;
                    margin-bottom: 50px;
                }
                @media screen and (max-width: ${breakpoints.mediumDesktop}) {
                    aside {
                        padding: 0 10px;
                    }   
                }
                @media screen and (max-width: ${breakpoints.extraSmallDesktop}) {
                    aside {
                        grid-template-columns: repeat(2, minmax(100px, 1fr));
                    }   
                }
            `}</style>
        </>
    )
}

export default AllBlogPosts