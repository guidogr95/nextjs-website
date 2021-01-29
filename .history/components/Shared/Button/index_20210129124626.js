// Utils
import { Button } from 'react-rainbow-components'
// Theme
import { colors, borderRadius } from 'styles/theme'

const index = (props) => {
    const { variant } = props

    return (
        <>
            <Button {...props} className="themeButton" />
            <style jsx>{`
                :global(.themeButton) {

                }
            `}</style>
        </>
    )
}

export default index