import Accordion from 'components/Shared/Accordion'
import { desktopMaxWidth } from 'styles/theme'

const FaqAccordion = ({ ComponentProps }) => {

    console.log(ComponentProps)

    return (
        <>
            <section className="contianerSection" >
                <main>
                    <Accordion />
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

export default FaqAccordion