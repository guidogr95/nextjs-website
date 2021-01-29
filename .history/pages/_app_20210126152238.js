// Styles
import AppLayout from 'AppLayout'
// Components
import NavBar from 'components/NavBar'
// Utils
import axios from 'axios'
// Contants
import { apiUrl, apiToken } from 'utils/constants'

function MyApp ({ Component, pageProps, navButtons }) {
  console.log(pageProps)
  return (
    <AppLayout>
      <NavBar />
      <Component {...pageProps} />
    </AppLayout>
  )
}

export async function getStaticProps () {
  const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navButtons = navRes.data.MenuItemMain

  return { props: { navButtons } }
}

export default MyApp