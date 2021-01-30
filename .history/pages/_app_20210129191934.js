// Styles
import AppLayout from 'AppLayout'
import 'bootstrap/scss/bootstrap.scss'
// Components
import NavBar from 'components/NavBar'

function MyApp ({ Component, pageProps }) {
  const { navButtons } = pageProps
  return (
    <AppLayout>
      <NavBar navButtons={navButtons} />
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp