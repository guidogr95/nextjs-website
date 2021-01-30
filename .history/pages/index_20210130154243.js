// Utils
import axios from 'axios'
import renderWithProps from 'utils/renderWithProps'

const index = ({ Body, Pathname, Blogs }) => {
  return (
    <div>
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
  const res = await axios.get(`${process.env.API_URL}/pages?Slug=home`, { headers: { Authorization: `Bearer ${process.env.API_TOKEN}` } })
  const page = res.data[0]
  const navRes = await axios.get(`${process.env.API_URL}/main-menu`, { headers: { Authorization: `Bearer ${process.env.API_TOKEN}` } })
  const navButtons = navRes.data.MenuItemMain

  const blogPosts = await axios.post(`${process.env.API_URL}/graphql`, {
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
    { headers: { Authorization: `Bearer ${process.env.API_TOKEN}` } }
  )

  const Blogs = blogPosts.data.data.blogs.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))

  // Pass post data to the page via props
  return { props: { ...page, navButtons, Blogs } }
}

export default index