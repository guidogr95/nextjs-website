// Utils
import { Input } from 'react-rainbow-components'
// Theme
import { colors, borderRadius } from 'styles/theme'

const index = (props) => {
    return (
        <>
            <Input
                {...props}
                className="themeInput"
            />
            <style jsx>{`
                :global(.themeInput input:focus),
                :global(.themeInput input:active) {
                    outline: 0;
                    padding: 0 0.9375rem;
                    border: 2px solid ${colors.day};
                    background-color: rgba(255,255,255,1);
                    box-shadow: 0 0 2px #01b6f5;
                }
                :global(.themeInput label) {
                    align-self: flex-start;
                    margin-bottom: 5px;
                }
                :global(.themeInput input) {
                    border-radius: ${borderRadius};
                }
            `}</style>
        </>
    )
}

export default index