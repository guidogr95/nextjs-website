// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import TutorialPostCard from 'components/Shared/TutorialPostCard'
// Constants
import { apiUrl } from 'config/constants'

const AllTutorials = ({ Tutorials }) => {
    return (
        <>
            <section className="containerSection" >
                <main>
                    <h2 className="sectionTitle" >Latest Articles</h2>
                    <aside>
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
            `}</style>
        </>
    )
}

export default AllTutorials