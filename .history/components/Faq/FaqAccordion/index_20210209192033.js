import Accordion from 'components/Shared/Accordion'
import { desktopMaxWidth } from 'styles/theme'

const FaqAccordion = ({ ComponentProps }) => {

    console.log(ComponentProps)

    return (
        <>
            <section className="containerSection" >
                <main>
                    {ComponentProps.Accordion && ComponentProps.Accordion.map(accordion => {
                        return (
                            <Accordion
                                key={accordion.id}
                                items={accordion.Item}
                                title={accordion.title}
                            />
                        )
                    })}
                </main>
            </section>
            <style jsx>{`
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