import { useState } from 'react'
// Theme
import { colors } from 'styles/theme'
// Components
import Button from 'react-bootstrap/Button'

const NewsLetterSignup = () => {

    const [formData, setFormData] = useState('')

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        window.alert('clicked')
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} >
                    <h5>Subscribe to our newsletter</h5>
                    <span>cloud computing news and announcements</span>
                    <label>Email</label>
                    <input
                        label="Email"
                        placeholder="Enter your email..."
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setFormData(e.target.value)}
                        value={formData}
                        required
                        className="form-control me-2"
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
                label {
                    display: block;
                    margin: 0 0 10px 0;
                }
                input {
                    margin: 0 0 15px 0;
                }
                h5 {
                    text-transform: capitalize;
                    color: ${colors.lightGray};
                    margin: 0;
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