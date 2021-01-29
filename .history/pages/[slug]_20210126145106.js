// Components
import NavBar from 'components/NavBar'
// Utils
import axios from 'axios'
// Contants
import { apiUrl, apiToken } from 'utils/constants'

const slug = ({ page }) => {
  return (
    <div>
      <NavBar/>
      <p>{page.Title}</p>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths () {
  // Call an external API endpoint to get pages
  const res = await axios.get(`${apiUrl}/pages`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const pages = res.data
  // Get the paths we want to pre-render based on pages
  const paths = pages.map(page => `/${page.Slug.trim()}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  console.log('got here', params)
  const res = await axios.post(`${apiUrl}/graphql`, {
    query: `{
      pages(where: { Slug: "${params.slug}" }) {
        Title,
      }
    }`
  },
  { headers: { Authorization: `Bearer ${apiToken}` } }
  )
  const page = res.data.data.pages[0]
  // Pass post data to the page via props
  return { props: { page } }
}

export default slug