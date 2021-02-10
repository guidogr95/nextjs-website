import { useState } from 'react'
// Utils
import Accordion from 'components/Shared/Accordion'
// Theme
import { borderRadius, colors, desktopMaxWidth } from 'styles/theme'

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
                                    className={`accordion-card ${activeAccordion === accordion.Title.toLowerCase().replace(' ', '') ? 'active' : ''}`}
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
                    background: white;
                    min-height: 750px;
                }
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    padding: 45px 0;
                    display: grid;
                    grid-template-columns: 350px auto;
                }
                .accordion-cards {
                    display: grid;
                    grid-template-rows: repeat(${ComponentProps.Accordion.length}, 80px);
                    background: white;
                    height: fit-content;
                    border-radius: ${borderRadius} 0 0 ${borderRadius};
                    padding: 20px 0 20px 20px;
                    background: linear-gradient(145deg, #5b31e6, #6c3aff);
                    box-shadow: inset 20px 20px 60px #562ed9, inset -20px -20px 60px #743eff;
                    z-index: 2;
                    overflow: hidden;
                }
                .accordion-cards button {
                    border: none;
                    outline: 0;
                    background: transparent;
                    transition: .3s ease-out all;
                    border-radius: ${borderRadius} 0 0 ${borderRadius};
                    color: ${colors.whiteGray};
                    font-weight: 500;
                }
                .accordion-cards button.active {
                    border: none;
                    outline: 0;
                    color: ${colors.day};
                    background: white;
                    box-shadow:  20px 20px 60px #562ed9,
             -20px -20px 60px #743eff;
                }
                .accordion-list {
                    background: white;
                    padding: 20px;
                    border-radius: 0 ${borderRadius} ${borderRadius} 0;
                    box-shadow: -7px 5px 20px rgba(50, 50, 50, 0.2);
                }
            `}</style>
        </>
    )
}

export default FaqAccordion