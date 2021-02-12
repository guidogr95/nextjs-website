// Utils
import { axios, dynamic } from 'utils/imports'
// Contants
import { apiUrl, apiToken } from 'config/constants'
// Components
const PublicationHeader = dynamic(() => import('components/Shared/PublicationHeader'))
const PublicationContent = dynamic(() => import('components/Shared/PublicationContent'))

const slug = ({ Pathname, Title, Publisher, created_at, Content, Thumbnail, ThumbnailBgColorHex, TitleColor }) => {

  return (
    <div>
        <PublicationHeader
          Title={Title}
          Author={Publisher}
          Thumbnail={`${apiUrl}${Thumbnail.formats.small.url}`}
          BackgroundColor={ThumbnailBgColorHex}
          PublicationDate={created_at}
          TitleColor={TitleColor}
        />
        { Content &&
          <PublicationContent
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
  const pageLimit = await  axios.get(`${apiUrl}/blogs/count`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const res = await axios.get(`${apiUrl}/blogs?_limit=${pageLimit.data}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const pages = res.data
  // Get the paths we want to pre-render based on pages
  const paths = pages.map(page => `/blog/${page.Slug.trim()}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // { fallback: true } means it will generate static files that were not generated at build time on demand
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  const pageData = await axios.get(`${apiUrl}/blogs?Slug=${params.slug}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navRes = await axios.get(`${apiUrl}/main-menu`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const navButtons = navRes.data.MenuItemMain
  return {
    props: {
      ...pageData.data[0],
      navButtons,
      Pathname: params.slug
    },
    revalidate: 10
  }
}

export default slug