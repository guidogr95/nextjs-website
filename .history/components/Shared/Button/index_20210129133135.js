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
                            border-radius: ${borderRadius};
                            color: white;
                            border: 1px solid ${colors.day};
                            background: ${colors.day};
                        }
                        :global(.themeButton${variant}:hover),
                        :global(.themeButton${variant}:focus),
                        :global(.themeButton${variant}:active) {
                            border-color: ${colors.day};
                        }
                        :global(.themeButton${variant}:focus) {
                            outline: 0;
                            box-shadow: 0 0 2px ${colors.day};
                        }
                        :global(.themeButton${variant}:hover),
                        :global(.themeButton${variant}:focus) {
                            color: ${colors.day};
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
                            border-radius: ${borderRadius};
                            color: ${colors.day}aa;
                            border-color: ${colors.day}aa;
                        }
                        :global(.themeButton${variant}:hover),
                        :global(.themeButton${variant}:focus),
                        :global(.themeButton${variant}:active) {
                            border-color: ${colors.day};
                        }
                        :global(.themeButton${variant}:focus) {
                            outline: 0;
                            box-shadow: 0 0 2px ${colors.day};
                        }
                        :global(.themeButton${variant}:hover),
                        :global(.themeButton${variant}:focus) {
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