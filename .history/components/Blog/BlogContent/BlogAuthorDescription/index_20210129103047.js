const BlogAuthorDescription = ({ description }) => {
    return (
        <>
            <div>
                <h3>about the author</h3>
                <span>{description}</span>
            </div>
            <style jsx>{`
                h3 {
                    text-transform: uppercase;
                }
            `}</style>
        </>
    )
}

export default BlogAuthorDescription