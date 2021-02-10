// Styles
import AppLayout from 'AppLayout'
import 'styles/custom.scss'
// Components
import NavBar from 'components/NavBar'
import SEOHead from 'components/Shared/SEOHead'

function MyApp ({ Component, pageProps }) {
  const { navButtons, PageSEO } = pageProps
  console.log(PageSEO)
  return (
    <>
      <SEOHead {...PageSEO} />
      <AppLayout>
        { navButtons && <NavBar navButtons={navButtons} /> }
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default MyApp