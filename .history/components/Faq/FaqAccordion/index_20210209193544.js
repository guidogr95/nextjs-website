// Utils
import Accordion from 'components/Shared/Accordion'
import { uuid } from 'uuidv4'
// Theme
import { desktopMaxWidth } from 'styles/theme'

const FaqAccordion = ({ ComponentProps }) => {

    return (
        <>
            <section className="containerSection" >
                <main>
                    {ComponentProps.Accordion && ComponentProps.Accordion.map(accordion => {
                        return (
                            <Accordion
                                key={uuid().split('-')[0]}
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