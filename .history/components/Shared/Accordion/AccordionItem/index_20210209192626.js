import { useRef } from 'react'
// Utils
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// Assets
import { FiPlusCircle } from 'react-icons/fi'

const { Toggle, Collapse } = Accordion

const AccordionItem = () => {

    const headerRef = useRef(null)

    const handleHeader = () => {
        headerRef.current.click()
    }

    return (
        <>
            <Card>
                <Toggle ref={headerRef} as={Card.Header} eventKey="0">
                    Click me!
                </Toggle>
                <Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
                </Collapse>
                <div className="header-icon" onClick={handleHeader} >
                    <FiPlusCircle onClick={handleHeader} />
                </div>
            </Card>
            <style jsx>{`

            `}</style>
        </>
    )
}

export default AccordionItem