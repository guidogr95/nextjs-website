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
                    height: 200px;
                    box-shadow: 5px 5px 40px rgba(60, 60, 60, 0.2);
                }
            `}</style>
        </>
    )
}

export default ResourceSignup