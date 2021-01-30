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
                                <p>Hey</p>
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
            `}</style>
        </>
    )
}

export default ResourcesList