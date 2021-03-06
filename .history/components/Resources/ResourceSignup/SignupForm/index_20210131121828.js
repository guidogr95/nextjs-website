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
                <form onSubmit={handleSubmit} >
                    <label htmlFor="email" >Email</label>
                    <Input
                        onChange={handleInput}
                        id="email"
                        value={email}
                        name="email"
                        placeholder="Enter your email..."
                    />
                    <label htmlFor="name" >Name</label>
                    <Input
                        onChange={handleInput}
                        id="name"
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
            <style jsx>{`
                div {
                    max-width: 400px;
                    width: 100%;
                    background: ${colors.whiteGray};
                    padding: 20px;
                    border-radius: ${borderRadius};
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