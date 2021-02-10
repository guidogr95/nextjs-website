// Utils
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// Theme
import { borderRadius, colors } from 'styles/theme'
// Assets
import { FiPlusCircle } from 'react-icons/fi'

const index = () => {
    return (
        <>
            <div className="accordion-wrapper" >
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                        <FiPlusCircle />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
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
                }
                .accordion-wrapper :global(.card) {
                    border-radius: ${borderRadius};
                    border: 1px solid ${colors.day};
                }
                .accordion-wrapper :global(.card:not(:last-of-type)) {
                    margin-bottom: 25px;
                }
            `}</style>
        </>
    )
}

export default index