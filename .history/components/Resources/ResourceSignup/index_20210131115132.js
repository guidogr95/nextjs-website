// Theme
import { colors } from 'styles/theme'
// Assets
import Book from 'public/assets/media/images/book1.png'

const ResourceSignup = ({ Background }) => {
    return (
        <>
            <aside>
                <img src={Book} alt="book cover" />
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
                    box-shadow: 5px -50px 40px rgba(60, 60, 60, 0.7);
                }
            `}</style>
        </>
    )
}

export default ResourceSignup