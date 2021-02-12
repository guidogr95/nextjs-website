// Styles
import AppLayout from 'AppLayout'
import 'styles/custom.scss'
// Components
import NavBarClassic from 'components/NavBarClassic'
// import NavBar from 'components/NavBar'
import SEOHead from 'components/Shared/SEOHead'
// Context
import { ProvideSpring } from 'context/springContext'
import { ProvideSSG } from 'context/SSGContext'

function MyApp ({ Component, pageProps }) {
  const { navButtons, PageSEO } = pageProps
  return (
    <>
      {/* {PageSEO &&
        <SEOHead {...PageSEO} />
      } */}
      <AppLayout>
        <ProvideSpring>
          <ProvideSSG>
            {/* { navButtons && <NavBarClassic navButtons={navButtons} /> } */}
            <Component {...pageProps} />
          </ProvideSSG>
        </ProvideSpring>
      </AppLayout>
    </>
  )
}

export default MyApp