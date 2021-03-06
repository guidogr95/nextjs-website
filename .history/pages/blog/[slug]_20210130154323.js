// Utils
import axios from 'axios'
// Components
import BlogHeader from 'components/Blog/BlogHeader'
import BlogContent from 'components/Blog/BlogContent'

const slug = ({ Pathname, Title, Publisher, created_at, Content, Thumbnail, ThumbnailBgColorHex, TitleColor }) => {
  return (
    <div>
        <BlogHeader
          Title={Title}
          Author={Publisher}
          Thumbnail={`${process.env.API_URL}${Thumbnail.formats.small.url}`}
          BackgroundColor={ThumbnailBgColorHex}
          PublicationDate={created_at}
          TitleColor={TitleColor}
        />
        { Content &&
          <BlogContent
            Content={Content}
            Author={Publisher}
          />
        }
      {/* {Body && Body.map(bodyComponent => {
        return (
          renderWithProps({
            componentName: bodyComponent.__component,
            props: { ...bodyComponent, Pathname }
          })
        )
      })} */}
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths () {
  // Call an external API endpoint to get pages
  const res = await axios.get(`${process.env.API_URL}/blogs`, { headers: { Authorization: `Bearer ${process.env.API_TOKEN}` } })
  const pages = res.data
  // Get the paths we want to pre-render based on pages
  const paths = pages.map(page => `/blog/${page.Slug.trim()}`)
  console.log('blog', paths)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  const pageData = await axios.get(`${process.env.API_URL}/blogs?Slug=${params.slug}`, { headers: { Authorization: `Bearer ${process.env.API_TOKEN}` } })
  const navRes = await axios.get(`${process.env.API_URL}/main-menu`, { headers: { Authorization: `Bearer ${process.env.API_TOKEN}` } })
  const navButtons = navRes.data.MenuItemMain
  return { props: { ...pageData.data[0], navButtons, Pathname: params.slug } }
}

export default slug