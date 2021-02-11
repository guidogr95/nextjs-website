import Resources from 'components/Shared/Illustrations/Resources'

const renderIllustration = (name) => {
    switch (name) {
        case 'Resources':
            return <Resources />
        default:
            return null
    }

}

export default renderIllustration