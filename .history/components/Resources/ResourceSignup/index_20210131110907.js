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
                    filter: blur(2px);
                }
            `}</style>
        </>
    )
}

export default ResourceSignup