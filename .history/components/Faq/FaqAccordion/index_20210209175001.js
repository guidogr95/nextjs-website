import Accordion from 'components/Shared/Accordion'
import { desktopMaxWidth } from 'styles/theme'

const FaqAccordion = ({ ComponentProps }) => {

    console.log(ComponentProps)

    return (
        <>
            <section className="containerSection" >
                <main>
                    <Accordion />
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