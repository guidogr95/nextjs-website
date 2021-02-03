// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import TutorialPostCard from 'components/Shared/TutorialPostCard'
// Constants
import { apiUrl } from 'config/constants'
// Utils
import Masonry from 'react-masonry-css'

const AllTutorials = ({ Tutorials }) => {
    return (
        <>
            <section className="containerSection" >
                <main>
                    <h2 className="sectionTitle" >Latest Articles</h2>
                    <aside>
                        <Masonry
                            breakpointCols={3}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            { Tutorials.map(tutorial => {
                                return (
                                    <TutorialPostCard
                                        key={tutorial.published_at}
                                        Title={tutorial.Title}
                                        Thumbnail={`${apiUrl}${tutorial.Thumbnail.formats.small.url}`}
                                        Slug={tutorial.Slug}
                                    />
                                )
                            }) }
                        </Masonry>
                    </aside>
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
                aside .my-masonry-grid {
                    display: flex;
                    margin-left: -30px; /* gutter size offset */
                    width: auto;
                }
                aside .my-masonry-grid_column {
                    padding-left: 30px; /* gutter size */
                    background-clip: padding-box;
                }
                aside .my-masonry-grid_column > :global(article) {
                    background: grey;
                    margin-bottom: 30px;
                }
            `}</style>
        </>
    )
}

export default AllTutorials