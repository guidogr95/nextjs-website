// Utils
import axios from 'axios'
import customizeHtmlContent from 'utils/customizeHtmlContent'
// Contants
import { apiUrl, apiToken } from 'config/constants'
// Components
import SimpleHeader from 'components/Shared/SimpleHeader'
import ResourceSignup from 'components/Resources/ResourceSignup'
// Theme
import { colors } from 'styles/theme'

const slug = ({ Pathname, HeaderTitle, Subtitle, Cover, Content }) => {
  return (
    <>
      <div className="body-wrapper" >
          <SimpleHeader
              Title={HeaderTitle}
              Subtitle={Subtitle}
          />
          <section>
              <aside>
                <div className="readerBorder wrapper" >
                  <div className="reader-screenWrapper" >
                    <div className="reader-screen" >
                      <div>
                        <main dangerouslySetInnerHTML={{ __html: customizeHtmlContent(Content) }} />
                      </div>
                    </div>
                  </div>

                </div>
              </aside>
              <ResourceSignup
                Background={`${apiUrl}${Cover.formats.large.url}`}
              />
          </section>
      </div>
      <style jsx>{`
        .wrapper {
          margin: 0 20%; 
        }
        .readerBorder {
          background-color: #bdd4e7;
          background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
          border-radius: 20px;
          position: relative;
          height: 100%;
          max-height: 700px;
          width: 100%;
        }
        .reader-screenWrapper {
          position: absolute;
          top: 5px;
          bottom: 5px;
          left: 5px;
          right: 5px;
          border-radius: 20px;
          background: white;
          padding: 50px 30px;
        }
        .reader-screen {
          padding: 10px 20px;
          background: #F2F1F7;
        }
        .body-wrapper {
          position: relative;
        }
        main :global(figure img) {
          width: 100%;
        }
        main :global(p),
        main :global(figure),
        main :global(h1),
        main :global(h2),
        main :global(h3),
        main :global(h4),
        main :global(h5),
        main :global(h6) {
          margin-top: 0.46em;
          margin-bottom: 0.46em;
        }
        main :global(figure.image) {
          margin-left: auto;
          margin-right: auto;
        }
        main :global(p) {
          font-size: 18px;
          line-height: 1.58;
          letter-spacing: -.003em;
          color: ${colors.textGray};
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          display: inline-block;
        }
        main :global(h1),
        main :global(h2),
        main :global(h3),
        main :global(h4),
        main :global(h5),
        main :global(h6) {
          line-height: 1.3;
          font-weight: 600;
        }
        main :global(h1) {
          font-size: 50px;
        }
        main :global(h2) {
          font-size: 30px;
        }
        main :global(h3) {
          font-size: 25px;
        }
        main :global(h4) {
          font-size: 22px;
        }
        main :global(h5) {
          font-size: 18px;
        }
        main :global(h6) {
          font-size: 15px;
        }
        main :global(a) {
          color: -webkit-link;
        }
        main :global(a):hover {
          text-decoration: underline;
        }
        aside {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        section {
          display: grid;
          grid-template-columns: 50% 50%;
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