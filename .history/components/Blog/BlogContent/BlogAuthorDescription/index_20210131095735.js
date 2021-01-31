// Theme
import { colors } from 'styles/theme'

const BlogAuthorDescription = ({ description }) => {
    return (
        <>
            <div>
                <h5>about<br/> the author</h5>
                <span>{description}</span>
            </div>
            <style jsx>{`
                div {
                    border-left: 2px solid ${colors.day};
                    padding: 0 0 0 15px;
                    border-radius: 2px 0 0 2px;
                    margin-bottom: 60px;
                }
                h5 {
                    text-transform: uppercase;
                    font-weight: 600;
                    color: ${colors.textGray};
                    letter-spacing: 0.04em;
                    line-height: 1.1;
                    margin-top: 0;
                }
            `}</style>
        </>
    )
}

export default BlogAuthorDescription