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
      {page.Title}
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths () {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${apiUrl}/pages`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const pages = res.data
  // Get the paths we want to pre-render based on posts
  const paths = pages.map(page => `/${page.Slug.trim()}`)
  console.log(paths)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  console.log('got here', params)
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await axios.post(`${apiUrl}/graphql`, JSON.stringify({
    query: `{
      pages(where: { Slug: ${params.slug} }) {
        Title,
      }
    }`
  }),
  { headers: { Authorization: `Bearer ${apiToken}` } }
  )
  const page = res.data
  console.log('hhh', page, res)
  // Pass post data to the page via props
  return { props: { page } }
}

export default slug