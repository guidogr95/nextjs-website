// Utils
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import customizeHtmlContent from 'utils/customizeHtmlContent'
// Assets
import { FiPlusCircle } from 'react-icons/fi'

const { Toggle, Collapse } = Accordion

const AccordionItem = ({ Title, parentId, id, Content }) => {

    const itemId = `${parentId}${id}`

    const handleHeader = () => {
        document.getElementById(itemId).click()
    }

    return (
        <Card>
            <Toggle id={itemId} as={Card.Header} eventKey={itemId}>
                {Title}
            </Toggle>
            <Collapse eventKey={itemId}>
            <Card.Body dangerouslySetInnerHTML={{ __html: customizeHtmlContent(Content) }} />
            </Collapse>
            <div className="header-icon" onClick={handleHeader} >
                <FiPlusCircle onClick={handleHeader} />
            </div>
        </Card>
    )
}

export default AccordionItem