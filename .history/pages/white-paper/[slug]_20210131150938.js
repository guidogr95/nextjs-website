import Link from 'next/link'
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
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'

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
                      <div className="reader-camera" />
                      <div className="reader-homeBtn" />
                      <div className="textContainer-wrapper" >
                        <div className="textContainer" >
                          <Link href="/" >
                              <a className="logoLink" target="_blank" rel="noopener noreferer">
                                  <img className="navLogo" alt="standard-logo-horizontal" src={Logo} />
                              </a>
                          </Link>
                          <main dangerouslySetInnerHTML={{ __html: customizeHtmlContent(Content) }} />
                        </div>
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
          margin: 0 22%; 
        }
        .readerBorder {
          background-color: #bdd4e7;
          background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
          border-radius: 4%;
          position: relative;
          height: 100%;
          max-height: 720px;
          width: 100%;
        }
        .textContainer :global(.logoLink) {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .textContainer :global(.logoLink img) {
          max-width: 200px;
        }
        .reader-screenWrapper {
          position: absolute;
          top: 5px;
          bottom: 5px;
          left: 5px;
          right: 5px;
          border-radius: 4%;
          background: white;
          padding: 50px 30px;
        }
        .reader-screen {
          background: #F2F1F7;
          position: relative;
          height: 100%;
        }
        .textContainer-wrapper {
          padding: 10px 20px;
          overflow: auto;
          height: 100%;
        }
        .reader-camera,
        .reader-homeBtn {
          position: absolute;
          left: 0;
          right: 0;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .reader-homeBtn {
          bottom: -50px;
        }
        .reader-camera {
          top: -50px;
        }
        .reader-camera:after {
          content: '';
          height: 13px;
          width: 13px;
          background: #495356;
          border-radius: 50%;
        }
        .reader-homeBtn:after {
          content: '';
          height: 40px;
          width: 40px;
          background: #E7E7E8;
box-shadow: inset 22px 22px 44px #ababac,
            inset -22px -22px 44px #ffffff;
          border-radius: 50%;
        }
        .textContainer-wrapper::-webkit-scrollbar {
            width: 0.25rem;
        }
        .textContainer-wrapper::-webkit-scrollbar-track {
            background: rgba(250, 250, 250, 0.4);
        }
        .textContainer-wrapper::-webkit-scrollbar-thumb {
            background: ${colors.lightGray}40;
            border-radius: 2px;
        }
        .textContainer {
          padding: 20px;
          background: white;
          display: flex;
          flex-direction: column;
        }
        .body-wrapper {
          position: relative;
        }
        main {
          transform: scale(0.9);
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
          line-height: 1.1;
          font-weight: 600;
          color: ${colors.nightBlack};
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