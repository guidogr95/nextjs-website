const ResourceSignup = ({ Background }) => {
    return (
        <>
            <aside>

            </aside>
            <style jsx>{`
                aside {
                    background: url(${Background});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    filter: blur(10px);
                }
            `}</style>
        </>
    )
}

export default ResourceSignup