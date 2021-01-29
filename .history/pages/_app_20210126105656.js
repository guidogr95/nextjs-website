// Styles
import AppLayout from 'AppLayout'

function MyApp ({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp