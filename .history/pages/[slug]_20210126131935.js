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
  console.log(res)
  const pages = await res.json()
  console.log(pages)
  // Get the paths we want to pre-render based on posts
  const paths = pages.map(page => `/${page.Path.trim()}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await axios.get(`${apiUrl}/pages/${params.id}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  console.log(res)
  const page = await res.json()
  console.log(page)
  // Pass post data to the page via props
  return { props: { page } }
}

export default slug