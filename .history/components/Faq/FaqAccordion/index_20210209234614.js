import { useState } from 'react'
// Utils
import Accordion from 'components/Shared/Accordion'
import Icon from '@ant-design/icons'
// Theme
import { borderRadius, colors, desktopMaxWidth } from 'styles/theme'
import { apiUrl } from 'config/constants'

const FaqAccordion = ({ ComponentProps }) => {

    const [activeAccordion, setActiveAccordion] = useState(ComponentProps.Accordion[0].Title.toLowerCase().replace(' ', ''))

    const returnIcon = async (url) => {
        const svg = await fetch(url)
        .then(res => res.text())
        .then(text => text)

        return <div dangerouslySetInnerHTML={{ __html: svg }}/>
    }

    return (
        <>
            <section className="containerSection" >
                <main>
                    <div className="accordion-cards" >
                        {ComponentProps.Accordion && ComponentProps.Accordion.map(async accordion => {return (
                                <button
                                    className={`accordion-card ${activeAccordion === accordion.Title.toLowerCase().replace(' ', '') ? 'active' : ''}`}
                                    key={accordion.Title.toLowerCase().replace(' ', '')}
                                    onClick={(e) => setActiveAccordion(accordion.Title.toLowerCase().replace(' ', ''))}
                                >
                                    {accordion.Icon && returnIcon(`${apiUrl}${accordion.Icon.url}`) } <span>{accordion.Title}</span>
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
                    font-weight: 700;
                    font-size: 18px;
                    position: relative;
                    overflow: hidden;
                }
                .accordion-cards button:hover {
                    color: ${colors.day};
                }
                .accordion-cards button span,
                .accordion-cards button img {
                    z-index: 2;
                    position: relative;
                    filter: brightness(0.5) sepia(1) hue-rotate(45deg) saturate(7);
                }
                .accordion-cards button img {
                    fill: green;
                    stroke: green;
                }
                .accordion-cards button.active {
                    color: ${colors.day};
                }
                .accordion-cards button:after {
                    background: ${colors.dayLight};
                    content: '';
                    position: absolute;
                    top: -100%;
                    height: 100%;
                    left: 0;
                    right: 0;
                    transition: .3s ease-out all;
                    z-index: 1;
                }
                .accordion-cards button.active:after {
                    top: 0;
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