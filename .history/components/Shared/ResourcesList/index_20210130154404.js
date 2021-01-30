// Theme
import { desktopMaxWidth } from 'styles/theme'
// Components
import ResourceCard from './ResourceCard'

const ResourcesList = ({ ResourceLink }) => {
    return (
        <>
            <section className="containerSection" >
                <main>
                    <h2 className="sectionTitle" >
                        Latest Resources
                    </h2>
                    <aside>
                        { ResourceLink.map(resource => {
                            return (
                                <ResourceCard
                                    key={resource.id}
                                    resourceData={resource}
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
                }
                aside {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(100px, 1fr));
                    column-gap: 40px;
                    row-gap: 40px;
                }
            `}</style>
        </>
    )
}

export default ResourcesList