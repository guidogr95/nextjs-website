// Utils
import axios from 'axios'
import customizeHtmlContent from 'utils/customizeHtmlContent'
// Contants
import { apiUrl, apiToken } from 'config/constants'
// Components
import SimpleHeader from 'components/Shared/SimpleHeader'
import ResourceSignup from 'components/Resources/ResourceSignup'

const slug = ({ Pathname, HeaderTitle, Subtitle, Cover, Content }) => {
  return (
    <>
      <div>
          <SimpleHeader
              Title={HeaderTitle}
              Subtitle={Subtitle}
          />
          <section>
              <aside>
                <main dangerouslySetInnerHTML={{ __html: customizeHtmlContent(Content) }} />
              </aside>
              <ResourceSignup
                Background={`${apiUrl}${Cover.formats.large.url}`}
              />
          </section>
      </div>
      <style jsx>{`
        div {
          position: relative;
        }
        aside {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        main {
          padding: 20px 50px 0 20%; 
        }
        section {
          display: grid;
          grid-template-columns: 60% auto;
          width: 100%;
          min-height: 100vh;
        }
      `}</style>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths () {
  // Call an external API endpoint to get pages
  const res = await axios.get(`${apiUrl}/whitepapers-and-ebooks`, { headers: { Authorization: `Bearer ${apiToken}` } })
  const pages = res.data
  // Get the paths we want to pre-render based on pages
  const paths = pages.map(page => `/white-paper/${page.Slug.trim()}`)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  const pageData = await axios.get(`${apiUrl}/whitepapers-and-ebooks?Slug=${params.slug}`, { headers: { Authorization: `Bearer ${apiToken}` } })
  return { props: { ...pageData.data[0], Pathname: params.slug } }
}

export default slug