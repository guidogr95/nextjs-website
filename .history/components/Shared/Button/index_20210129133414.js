// Utils
import { Button } from 'react-rainbow-components'
// Theme
import { colors, borderRadius } from 'styles/theme'

const index = (props) => {
    const { variant } = props
    console.log(variant)
    switch (variant) {
        case 'outline-brand':
            return (
                <>
                    <Button {...props} className={`themeButton${variant}`}/>
                    <style jsx>{`
                        :global(.themeButton${variant}) {
                            border-radius: ${borderRadius} !important;
                            color: ${colors.day}aa !important;
                            border-color: ${colors.day}aa !important;
                        }
                        :global(.themeButton${variant}:hover),
                        :global(.themeButton${variant}:focus),
                        :global(.themeButton${variant}:active) {
                            border-color: ${colors.day} !important;
                        }
                        :global(.themeButton${variant}:focus) {
                            outline: 0 !important;
                            box-shadow: 0 0 2px ${colors.day} !important;
                        }
                        :global(.themeButton${variant}:hover),
                        :global(.themeButton${variant}:focus) {
                            color: ${colors.day} !important;
                        }
                    `}</style>
                </>

            )
        case 'brand':
            return (
                <>
                    <Button {...props} className={`themeButton${variant}`}/>
                    <style jsx>{`
                        :global(.themeButton${variant}) {
                            border-radius: ${borderRadius} !important;
                            color: white !important;
                            border: 1px solid ${colors.day} !important;
                            background: ${colors.day} !important;
                        }
                        :global(.themeButton${variant}:hover),
                        :global(.themeButton${variant}:focus),
                        :global(.themeButton${variant}:active) {
                            background: #5c32e6 !important;
                        }
                    `}</style>
                </>

            )
        default:
            return <Button {...props} className="themeButton" />
    }
}

export default index