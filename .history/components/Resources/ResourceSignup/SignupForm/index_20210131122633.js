import { useState } from 'react'
// Components
import Input from 'components/Shared/Input'
// Utils
import Button from 'react-bootstrap/Button'
import { borderRadius, colors } from 'styles/theme'

const SignupForm = () => {

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
    }

    return (
        <>
            <div>
                <h5>Fill out the form to receive your copy...</h5>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="email" >Email</label>
                    <Input
                        onChange={handleInput}
                        id="email"
                        type="email"
                        required
                        value={email}
                        name="email"
                        placeholder="Enter your email..."
                    />
                    <label htmlFor="name" >Name</label>
                    <Input
                        onChange={handleInput}
                        id="name"
                        required
                        value={name}
                        name="name"
                        placeholder="Enter your name..."
                    />
                    <Button
                        type="submit"
                        variant="brand"
                    >
                        Download
                    </Button>
                </form>
            </div>
            <span>
                By clicking “Download” I accept the Terms of Service, the Anti-Spam Policy, and the Privacy Policy. Accessibility info.
            </span>
            <style jsx>{`
                h5 {
                    margin-bottom: 30px;
                }
                div {
                    max-width: 400px;
                    width: 100%;
                    background: rgb(250, 250, 250);
                    backdrop-filter: blur(10px);
                    padding: 20px;
                    border-radius: ${borderRadius};
                    box-shadow:  20px 20px 60px #aa9dd3aa, -20px -20px 60px #e6d5ff10;
                }
                form {
                    display: flex;
                    flex-direction: column;
                }
                form :global(button) {
                    width: 100%;
                }
                label {
                    display: block;
                    margin-bottom: 10px;
                    color: ${colors.gray};
                }
                form :global(input),
                form :global(button) {
                    padding: 0.8rem 0.75rem;
                    height: initial;
                }
                form :global(button) {
                    text-transform: uppercase;
                }
                form :global(input) {
                    margin-bottom: 30px;
                }
            `}</style>
        </>
    )
}

export default SignupForm