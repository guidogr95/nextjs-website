import { useState } from ''
// Utils
import Accordion from 'components/Shared/Accordion'
// Theme
import { desktopMaxWidth } from 'styles/theme'

const FaqAccordion = ({ ComponentProps }) => {

    const [activeAccordion, setActiveAccordion] = useState(ComponentProps.Accordion[0].Title.toLowerCase().replace(' ', ''))

    return (
        <>
            <section className="containerSection" >
                <main>
                    <div className="accordion-cards" >
                        {ComponentProps.Accordion && ComponentProps.Accordion.map(accordion => {
                            return (
                                <button
                                    className="accordion-card"
                                    key={accordion.Title.toLowerCase().replace(' ', '')}
                                    name={accordion.Title.toLowerCase().replace(' ', '')}
                                    onChange={(e) => setActiveAccordion(e.target.name)}
                                >
                                    <h3>{accordion.Title}</h3>
                                </button>
                            )
                        })}
                    </div>
                    <div className="accordion-list" >
                    {ComponentProps.Accordion && ComponentProps.Accordion.map(accordion => {
                        return (
                            <Accordion
                                key={accordion.id}
                                parentId={accordion.id}
                                items={accordion.Item}
                                title={accordion.Title}
                                activeAccordion={activeAccordion}
                            />
                        )
                    })}

                    </div>
                </main>
            </section>
            <style jsx>{`
                section {
                    background: whitesmoke;
                }
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    padding: 45px 0;
                }
            `}</style>
        </>
    )
}

export default FaqAccordion