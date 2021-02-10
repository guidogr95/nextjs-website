// Utils
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// Theme
import { borderRadius, colors } from 'styles/theme'
// Assets
import { FiPlusCircle } from 'react-icons/fi'

const index = () => {

    const handleHeader = (e) => {
        console.log(e)
        if (e.target === 'svg') return
        e.target.parentElement.children[0].click()
    }

    return (
        <>
            <div className="accordion-wrapper" >
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                    <div className="header-icon" onClick={handleHeader} >
                        <FiPlusCircle onClick={(e) => e.stopPropagation()} />
                    </div>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
            <style jsx>{`
                .accordion-wrapper :global(.card-header) {
                    cursor: pointer;
                    color: ${colors.whiteGray};
                    background: ${colors.day};
                    font-weight: bold;
                    letter-spacing: 0.03em;
                    padding: 1rem 1.25rem;
                    height: 60px;
                    display: flex;
                    justify-content: space-between;
                    aling-items: center;
                }
                .accordion-wrapper :global(.card) {
                    border-radius: ${borderRadius};
                    border: 1px solid ${colors.day};
                    position: relative;
                }
                .accordion-wrapper :global(.card .header-icon) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    padding: 1rem 1.25rem;
                    height: 60px;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    color: ${colors.whiteGray};
                    cursor: pointer;
                }
                .accordion-wrapper :global(.header-icon svg line) {
                    transition: .3s ease-out all;
                }
                .accordion-wrapper :global(.collapse.show + .header-icon svg line:first-of-type) {
                    stroke-width: 0;
                }
                .accordion-wrapper :global(.card .header-icon svg) {
                    font-size: 1.6em;
                }
                .accordion-wrapper :global(.card:not(:last-of-type)) {
                    margin-bottom: 25px;
                }
            `}</style>
        </>
    )
}

export default index