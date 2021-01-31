// Theme
import { colors } from 'styles/theme'
// Assets
import Book from 'public/assets/media/images/book1.png'
// Components
import SignupForm from './SignupForm'

const ResourceSignup = ({ Background }) => {
    return (
        <>
            <aside>
                <img src={Book} alt="book cover" />
                <SignupForm />
            </aside>
            <style jsx>{`
                aside {
                    background: ${colors.day};
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                img {
                    height: 300px;
                    box-shadow:  20px 20px 60px #562ed9, -20px -20px 60px #743eff;
                }
            `}</style>
        </>
    )
}

export default ResourceSignup