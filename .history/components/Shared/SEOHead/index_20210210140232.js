import Head from 'next/Head'

const SEOHead = ({ pageSEO }) => {

    console.log(pageSEO)

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
    )
}

export default SEOHead