// Theme
import { colors } from 'styles/theme'
// Assets
import Book from 'public/assets/media/images/book1.png'
// Components
import SignupForm from './SignupForm'

const ResourceSignup = () => {
    return (
        <>
            <aside>
                <div className="separator" />
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
                    position: relative;
                }
                .separator {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                }
                .separator:after {
                    content: '';
                    background: white;
                    height: 25px;
                    width: 25px;
                }
                img {
                    height: 300px;
                    box-shadow:  20px 20px 60px #aa9dd3, -20px -20px 60px #e6d5ff;
                    margin-bottom: 50px;
                }
            `}</style>
        </>
    )
}

export default ResourceSignup