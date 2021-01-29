// Utils
import axios from 'axios'
import renderWithProps from 'utils/renderWithProps'
// Contants
import { apiUrl, apiToken } from 'utils/constants'

const slug = ({ Title, Body }) => {
  return (
    <div>
      {Body.map(bodyComponent => {
        return (
          renderWithProps({ componentName: bodyComponent.__component, props: { ...bodyComponent } })
        )
      })}
      <p>{Title}</p>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths () {
  // Call an external API endpoint to get pages
  const res = await axios.get(`${apiUrl}/pages`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const pages = res.data
  // Get the paths we want to pre-render based on pages
  const paths = pages.map(page => `/${page.Slug.trim()}`).filter(page => page !== '/home')
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  // // DATA FETCHING NEEDS IMPROVEMENT
  const res = await axios.post(`${apiUrl}/graphql`, {
    query: `{
      pages(where: { Slug: "${params.slug}" }) {
        id
      }
    }`
  },
  { headers: { Authorization: `Bearer ${apiToken}` } }
  )
  const pageId = res.data.data.pages[0].id
  const pageData = await axios.get(`${apiUrl}/pages/${pageId}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navButtons = navRes.data.MenuItemMain
  // Pass post data to the page via props
  return { props: { ...pageData.data, navButtons } }
}

export default slug