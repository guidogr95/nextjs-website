import { colors } from 'styles/theme'

const BlogAuthorDescription = ({ description }) => {
    return (
        <>
            <div>
                <h3>about the author</h3>
                <span>{description}</span>
            </div>
            <style jsx>{`
                div {
                    border-left: 2px solid ${colors.day};
                }
                h3 {
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