// Styles
import AppLayout from 'AppLayout'
import 'styles/custom.scss'
// Components
import NavBar from 'components/NavBar'

function MyApp ({ Component, pageProps }) {
  const { navButtons } = pageProps
  return (
    <AppLayout>
      { navButtons && <NavBar navButtons={navButtons} /> }
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp