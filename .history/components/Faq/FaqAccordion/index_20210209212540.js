import { useState } from 'react'
// Utils
import Accordion from 'components/Shared/Accordion'
// Theme
import { borderRadius, desktopMaxWidth } from 'styles/theme'

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
                                    onClick={(e) => setActiveAccordion(accordion.Title.toLowerCase().replace(' ', ''))}
                                >
                                    <span>{accordion.Title}</span>
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
                    display: grid;
                    grid-template-columns: 350px auto;
                    column-gap: 20px;
                }
                .accordion-cards {
                    display: grid;
                    grid-template-rows: repeat(${ComponentProps.Accordion.length}, 80px);
                    background: white;
                    height: fit-content;
                    border-radius: ${borderRadius} 0 0 ${borderRadius};
                }
                .accordion-cards button {
                    border: none;
                    outline: 0;
                    background: transparent;
                }
                .accordion-list {
                    background: white;
                }
            `}</style>
        </>
    )
}

export default FaqAccordion