// Utils
import axios from 'axios'
import renderWithProps from 'utils/renderWithProps'
// Contants
import { apiUrl, apiToken } from 'utils/constants'
// Components
import SmallHeader from 'components/Shared/SmallHeader'

const index = ({ Body, Pathname, Blogs }) => {
  return (
    <div>
      <SmallHeader />
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

// This also gets called at build time
export async function getStaticProps () {
  const res = await axios.get(`${apiUrl}/pages?Slug=home`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const page = res.data[0]
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

  // Pass post data to the page via props
  return { props: { ...page, navButtons, Blogs } }
}

export default index