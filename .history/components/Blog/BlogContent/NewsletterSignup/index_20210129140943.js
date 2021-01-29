import { useState } from 'react'
// Theme
import { colors } from 'styles/theme'
// Components
import Input from 'components/Shared/Input'
import Button from 'components/Shared/Button'

const NewsLetterSignup = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
    const { name, email } = formData

    const handleInput = (e) => {
        setFormData({
            [e.target.name]: e.target.value
        })
    }

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
                    <Input
                        label="Email"
                        placeholder="Enter your email..."
                        type="email"
                        name="email"
                        onChange={handleInput}
                        value={email}
                        required
                    />
                    <Button
                        type="submit"
                        variant="brand"
                    >
                        Sign Me Up
                    </Button>
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
                form {
                    display: flex;
                    flex-direction: column;
                }
                form :global(.themeInput) {
                    margin-bottom: 15px;
                }
            `}</style>
        </>
    )
}

export default NewsLetterSignup