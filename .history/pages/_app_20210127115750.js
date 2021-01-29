// Styles
import AppLayout from 'AppLayout'
// Components
import NavBar from 'components/NavBar'

function MyApp ({ Component, pageProps }) {
  const { navButtons } = pageProps
  console.log(pageProps)
  return (
    <AppLayout>
      <NavBar navButtons={navButtons} />
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp