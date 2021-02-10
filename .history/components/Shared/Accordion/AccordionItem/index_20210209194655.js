// Utils
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { uuid } from 'uuidv4'
// Assets
import { FiPlusCircle } from 'react-icons/fi'

const { Toggle, Collapse } = Accordion

const AccordionItem = ({ Title, parentId, id }) => {

    const itemId = `${parentId}${id}`

    const handleHeader = () => {
        console.log(itemId)
        console.log(document.getElementById(itemId))
        document.getElementById(itemId).click()
    }

    return (
        <>
            <Card>
                <Toggle id={itemId} as={Card.Header} eventKey="0">
                    {Title}
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