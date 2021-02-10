import Head from 'next/Head'

const SEOHead = ({ FacebookSeo, GoogleSEO, TwitterSeo }) => {

    console.log(FacebookSeo, GoogleSEO, TwitterSeo)

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
    )
}

export default SEOHead