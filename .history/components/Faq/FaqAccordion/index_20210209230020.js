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
                    padding: 20px;
                    box-shadow: -14px 5px 40px rgba(180, 180, 180, 0.2);
                    z-index: 2;
                }
                .accordion-cards button {
                    border: none;
                    outline: 0;
                    background: transparent;
                    transition: .3s ease-out all;
                    border-radius: ${borderRadius};
                    color: ${colors.lightGray};
                    letter-spacing: 0.02em;
                    font-weight: 500;
                    font-size: 18px;
                    font-weight: bold;
                    position: relative;
                    overflow: hidden;
                }
                .accordion-cards button:hover {
                    color: ${colors.day};
                }
                .accordion-cards button:after {
                    background: ${colors.dayLight};
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: -100%;
                    width: 100%;
                    transition: .3s ease-out all;
                }
                .accordion-cards button.active:after {
                    left: 0;
                }
                .accordion-list {
                    background: white;
                    padding: 20px;
                    border-radius: 0 ${borderRadius} ${borderRadius} ${borderRadius};
                    box-shadow: -7px 5px 40px rgba(180, 180, 180, 0.2);
                }
            `}</style>
        </>
    )
}

export default FaqAccordion