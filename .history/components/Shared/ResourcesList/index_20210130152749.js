import { desktopMaxWidth } from 'styles/theme'

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
                            console.log(resource)
                            return (
                                <ResourceCard />
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
                    grid-template-columns: repeat(3, minmax(100px, 1fr));
                    column-gap: 40px;
                    row-gap: 40px;
                }
            `}</style>
        </>
    )
}

export default ResourcesList