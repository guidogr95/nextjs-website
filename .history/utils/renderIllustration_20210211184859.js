// Components
import Resources from 'components/Shared/Illustrations/Resources'
import Whitepaper from 'components/Shared/Illustrations/Whitepaper'

const renderIllustration = (name) => {
    switch (name) {
        case 'Resources':
            return <Resources />
        case 'Whitepaper':
            return <Whitepaper />
        default:
            return null
    }

}

export default renderIllustration