// Styles
import AppLayout from 'AppLayout'
import 'styles/custom.scss'
// Components
import NavBar from 'components/NavBar'
import { Head } from 'next/document'

function MyApp ({ Component, pageProps }) {
  const { navButtons } = pageProps
  return (
    <>
      <AppLayout>
        { navButtons && <NavBar navButtons={navButtons} /> }
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default MyApp