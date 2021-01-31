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
                    background: ${colors.dayLight};
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                img {
                    height: 300px;
                    box-shadow:  20px 20px 60px #aa9dd3, -20px -20px 60px #e6d5ff;
                }
            `}</style>
        </>
    )
}

export default ResourceSignup