// Utils
import axios from 'axios'
import renderWithProps from 'utils/renderWithProps'
import getPaths from 'utils/getPaths'
// Contants
import { apiUrl, apiToken } from 'utils/constants'
// Components
import SmallHeader from 'components/Shared/SmallHeader'

const slug = ({ Body, Pathname, Blogs }) => {
  return (
    <div>
      <SmallHeader />
      {/* Map through page components and add props */}
      {Body && Body.map(bodyComponent => {
        return (
          renderWithProps({
            componentName: bodyComponent.__component,
            props: { ...bodyComponent, Pathname, Blogs }
          })
        )
      })}
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths () {
  // Call an external API endpoint to get pages
  const res = await axios.get(`${apiUrl}/pages`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const pages = res.data
  // Get the paths we want to pre-render based on pages. Exclude home page
  const paths = getPaths(pages).filter(page => page !== '/home')
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time. Receives the paths from the above functions and passes the information down to the page
export async function getStaticProps ({ params }) {
  const { slug } = params
  const Slug = slug[slug.length - 1]
  const pageData = await axios.get(`${apiUrl}/pages?Slug=${Slug}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navButtons = navRes.data.MenuItemMain
  const blogPosts = await axios.post(`${apiUrl}/graphql`, {
    query: `{
      blogs {
        Title,
        Content,
        Slug,
        published_at,
        Featured,
        Publisher {
          fullname,
          description,
          ProfilePicture {
            url
          }
        },
        Thumbnail {
          formats
        },
        ThumbnailBgColorHex,
        TitleColor
      }
    }`
    },
    { headers: { Authorization: `Bearer ${apiToken}` } }
  )
  const Blogs = blogPosts.data.data.blogs.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
  return { props: { ...pageData.data[0], navButtons, Pathname: Slug, Blogs } }
}

export default slug