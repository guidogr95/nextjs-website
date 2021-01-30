import { useState } from 'react'
// Theme
import { colors } from 'styles/theme'
// Components
import Button from 'react-bootstrap/Button'

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
                    <h4>Subscribe to our newsletter</h4>
                    <span>cloud computing news and announcements</span>
                    <label>Email</label>
                    <input
                        label="Email"
                        placeholder="Enter your email..."
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleInput}
                        value={email}
                        required
                        className="form-control me-2"
                    />
                    <Button
                        type="submit"
                        variant="brand"
                        className="btn btn-primary"
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
                label {
                    display: block;
                    margin: 0 0 s10px 0;
                }
                h4 {
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
            `}</style>
        </>
    )
}

export default NewsLetterSignup