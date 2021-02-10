import Head from 'next/Head'

const SEOHead = ({ FacebookSeo, GoogleSEO, TwitterSeo }) => {

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {GoogleSEO.Title && <title>{GoogleSEO.Title}</title>}
        </Head>
    )
}

export default SEOHead