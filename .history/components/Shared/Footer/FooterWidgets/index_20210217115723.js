// Utils
import Link from 'next/link'

const FooterWidgets = ({ navItems }) => {
    console.log(navItems)
    return (
        <>
            <main>
                {Array.from(Array(4)).map((_, index) => {
                    const sliceStart = index === 0 ? 0 : index === 1 ? 2 : index === 2 ? 4 : 5
                    const sliceEnd = index === 0 ? 2 : index === 1 ? 4 : index === 2 ? 5 : 6

                    console.log(sliceStart, sliceEnd, navItems.slice(sliceStart, sliceEnd))
                    return (
                        <div className="footer-column" key={index} >
                            {navItems.slice(sliceStart, sliceEnd).map(navItem => {
                                return (
                                    <div key={navItem.id} className="navItem" >
                                        <h4>{navItem.Label}</h4>
                                        <ul>
                                            {navItem.FooterNavSubItem.map(subItem => {
                                                return (
                                                    <li key={subItem.Label} >
                                                        <Link href="/" >
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
            </main>
            <style jsx>{`
                main {
                    max-width: 1100px;
                    margin: 0 78px;
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                }
                .footer-column {
                    padding: 0 15px;
                }
                .footer-column .navItem {
                    margin-bottom: 50px;
                }
                .footer-column .navItem h4 {
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
                    color: #9ba6af;
                    font-size: 14px;
                }
                .footer-column .navItem li a {
                    letter-spacing: 0.01em;
                }
            `}</style>
        </>
    )
}

export default FooterWidgets