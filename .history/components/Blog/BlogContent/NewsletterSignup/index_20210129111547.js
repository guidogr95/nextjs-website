import { useState } from 'react'
// Theme
import { colors } from 'styles/theme'
// Utils
import { Button } from 'react-rainbow-components'

const NewsLetterSignup = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        window.alert('clicked')
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} >
                    <h3>Subscrine to our newsletter</h3>
                    <h4>cloud computing news and announcements</h4>

                    <Button>Sign me up</Button>
                </form>
            </div>
            <style jsx>{`
                div {
                    border-left: 2px solid ${colors.day};
                    padding: 0 0 0 15px;
                    border-radius: 2px 0 0 2px;
                }
                h3 {
                    text-transform: capitalize;
                    coor: ${colors.nightBlack};
                }
                h4 {
                    text-transform: uppercase;
                    letter-spacing: 0.02em;
                    color: ${colors.textGray};
                    font-weight: medium;
                }
            `}</style>
        </>
    )
}

export default NewsLetterSignup