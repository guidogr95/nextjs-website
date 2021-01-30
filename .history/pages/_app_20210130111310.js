// Styles
import AppLayout from 'AppLayout'
import 'styles/custom.scss'
import 'bootstrap/dist/css/bootstrap.css'
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