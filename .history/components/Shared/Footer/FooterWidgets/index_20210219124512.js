// Utils
import Link from 'next/link'
import getPaths from 'utils/getPaths'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'
// Components
import SearchBox from 'components/Shared/Footer/SearchBox'

const FooterWidgets = ({ navItems, address }) => {
    return (
        <>
            <main>
                {Array.from(Array(4)).map((_, index) => {
                    const sliceStart = index === 0 ? 0 : index === 1 ? 2 : index === 2 ? 4 : 5
                    const sliceEnd = index === 0 ? 2 : index === 1 ? 4 : index === 2 ? 5 : 6
                    return (
                        <div className="footer-column" key={index} >
                            {navItems.slice(sliceStart, sliceEnd).map(navItem => {
                                return (
                                    <div key={navItem.id} className="navItem" >
                                        <h4>{navItem.Label}</h4>
                                        <ul>
                                            {navItem.FooterNavSubItem.map(subItem => {
                                                const fullSlug = subItem.Link === 'Custom' ? subItem?.Url || '/' : subItem?.Page ? getPaths(subItem?.Page, true) : '/'
                                                return (
                                                    <li key={subItem.Label} >
                                                        <Link href={fullSlug} >
                                                            <a>
                                                                {subItem.Label}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <div className="footer-column identity" >
                    <div className="navItem" >
                        <img alt="site logo" src={Logo} />
                        <br/>
                        <br/>
                        <span className="siteInfo" >
                            {address}
                        </span>
                    </div>
                    <SearchBox />
                </div>
            </main>
            <style jsx>{`
                main {
                    max-width: 1100px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                }
                .footer-column.identity .siteInfo {
                    font-weight: bold;
                    font-size: 14px;
                    color: #9ba6af;
                    white-space: pre-line;
                    line-height: 1.7;
                }
                .footer-column.identity img {
                    width: 100%;
                    max-width: 100%;
                }
                .footer-column {
                    padding: 0 15px;
                }
                .footer-column .navItem {
                    margin-bottom: 50px;
                }
                .footer-column :global(h4) {
                    font-size: 18px;
                    margin: 0 0 28px 0;
                    line-height: 1.2;
                    font-weight: bold;
                    color: #172b3c;
                }
                .footer-column .navItem ul {
                    list-style: none;
                }
                .footer-column .navItem li {
                    padding-bottom: 10px;
                    font-weight: bold;
                    font-size: 14px;
                }
                .footer-column .navItem li a {
                    color: #9ba6af;
                    letter-spacing: -0.02em;
                }
            `}</style>
        </>
    )
}

export default FooterWidgets