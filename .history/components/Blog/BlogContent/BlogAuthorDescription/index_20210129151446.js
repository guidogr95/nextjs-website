// Theme
import { colors } from 'styles/theme'

const BlogAuthorDescription = ({ description }) => {
    return (
        <>
            <div>
                <h4>about<br/> the author</h4>
                <span>{description}</span>
            </div>
            <style jsx>{`
                div {
                    border-left: 2px solid ${colors.day};
                    padding: 0 0 0 15px;
                    border-radius: 2px 0 0 2px;
                    margin-bottom: 60px;
                }
                h4 {
                    text-transform: uppercase;
                    font-weight: 600;
                    color: ${colors.textGray};
                    letter-spacing: 0.04em;
                }
            `}</style>
        </>
    )
}

export default BlogAuthorDescription