import { useState } from 'react'
// Components
import Input from 'components/Shared/Input'
// Utils
import Button from 'react-bootstrap/Button'

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
                    max-widht: 800px;
                    width: 100%;
                }
                form {
                    display: flex;
                    flex-direction: column;
                }
                form :global(button) {
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default SignupForm