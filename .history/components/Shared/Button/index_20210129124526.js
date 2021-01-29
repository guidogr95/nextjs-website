// Utils
import { Button, Application } from 'react-rainbow-components'
// Theme
import { colors, borderRadius } from 'styles/theme'

const index = (props) => {
    const { variant } = props

    const theme = {
        rainbow: {
            palette: {
                brand: colors.day
            },
            input: {
              background: 'black'
            }
        }
      }

    return (
        <>
            <Application theme={theme} >
                <Button {...props} />
            </Application>
            <style jsx>{`

            `}</style>
        </>
    )
}

export default index