import { useRef } from 'react'
// Utils
import Collapse from 'react-bootstrap/Accordion/Collapse'
import Toggle from 'react-bootstrap/Accordion/Toggle'
import Card from 'react-bootstrap/Card'
// Assets
import { FiPlusCircle } from 'react-icons/fi'

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