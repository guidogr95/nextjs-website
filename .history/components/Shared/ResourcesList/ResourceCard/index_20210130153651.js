const ResourceCard = ({ resourceData }) => {
    console.log(resourceData)
    const thumbnail = `${process.env.NODE_ENV === 'development' ? process.env.HOST : process.env.PROD_HOST}${resourceData.Thumbnail.url}`
    return (
        <>
            <article>

            </article>
            <style jsx>{`
                article {
                    width: 100%;
                    height: 300px;
                    background: url(${thumbnail});
                    background-size: cover;
                    background-repeat: no-repeat;
                }
            `}</style>
        </>
    )
}

export default ResourceCard