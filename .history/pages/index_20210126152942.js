// Utils
import axios from 'axios'
// Contants
import { apiUrl, apiToken } from 'utils/constants'

const index = ({ Title }) => {
  return (
    <div>
      <p>{Title}</p>
    </div>
  )
}

// This also gets called at build time
export async function getStaticProps () {
  const res = await axios.post(`${apiUrl}/graphql`, {
    query: `{
      pages(where: { Slug: "home" }) {
        Title,
      }
    }`
  },
  { headers: { Authorization: `Bearer ${apiToken}` } }
  )
  const page = res.data.data.pages[0]
  const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navButtons = navRes.data.MenuItemMain
  // Pass post data to the page via props
  return { props: { ...page, navButtons } }
}

export default index