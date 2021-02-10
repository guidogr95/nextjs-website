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
      <Head>
        <title>my title</title>
      </Head>
      <AppLayout>
        { navButtons && <NavBar navButtons={navButtons} /> }
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default MyApp