// Components
import FooterWidgets from './FooterWidgets'

const Footer = ({ footerData }) => {
    return (
        <>
            <footer>
                <FooterWidgets
                    navItems={footerData.FooterNavItem}
                    address={footerData.Address}
                />
                <aside>
                    <div className="copyright-notice" >
                        Copyright © 2005-2020 — VEXXHOST, Inc. <br/>
                        All prices are in USD unless otherwise indicated.
                    </div>
                </aside>
            </footer>
            <style jsx>{`
                footer {
                    padding: 0;
                    margin-top: 75px;
                    margin-bottom: 30px;
                    margin-left: 19%;
                    margin-right: 15%;
                    font-family: Arial;
                    display: flex;
                    flex-direction: column;
                }
                aside {
                    text-align: center;
                }
                .copyright-notice {
                    font-size: 14px;
                    color: #adb1b5;
                }
            `}</style>
        </>
    )
}

export default Footer