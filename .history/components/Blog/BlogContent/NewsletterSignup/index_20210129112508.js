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
                    <h3>Subscribe to our newsletter</h3>
                    <span>cloud computing news and announcements</span>

                    <Button type="submit" variant="brand" >Sign me up</Button>
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
                    color: ${colors.lightGray};
                }
                span {
                    text-transform: uppercase;
                    letter-spacing: 0.02em;
                    color: ${colors.textGray};
                    font-weight: 600;
                    font-size: 0.9em;
                    margin: 15px 0;
                    display: block;
                }
            `}</style>
        </>
    )
}

export default NewsLetterSignup