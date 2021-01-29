// Utils
import { Button } from 'react-rainbow-components'
// Theme
import { colors, borderRadius } from 'styles/theme'

const index = (props) => {
    const { variant } = props

    switch (variant) {
        case 'outline-brand':
            return (
                <>
                    <Button {...props} className="themeButton" />
                    <style jsx>{`
                        :global(.themeButton) {
                            border-radius: ${borderRadius};
                            
                        }
                        :global(.themeButton:hover),
                        :global(.themeButton:focus),
                        :global(.themeButton:active) {
                            border-color: ${colors.day};
                        }
                        :global(.themeButton:focus) {
                            outline: 0;
                            box-shadow: 0 0 2px ${colors.day};
                        }
                        :global(.themeButton:hover),
                        :global(.themeButton:focus) {
                            color: ${colors.day};
                        }
                    `}</style>
                </>

            )
        default:
            return <Button {...props} className="themeButton" />
    }
}

export default index