import { useState } from 'react'
// Theme
import { colors } from 'styles/theme'
// Utils
import { Button } from 'react-rainbow-components'
// Components
import Input from 'components/Shared/Input'

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
                        label="Name"
                        placeholder="Enter your name..."
                        type="text"
                        name="name"
                        onChange={handleInput}
                        value={name}
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email..."
                        type="email"
                    />
                    <Button
                        type="submit"
                        variant="outline-brand"
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
            `}</style>
        </>
    )
}

export default NewsLetterSignup