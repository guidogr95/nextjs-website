// Components
import FooterWidgets from './FooterWidgets'

const Footer = ({ footerData }) => {
    return (
        <>
            <footer>
                <FooterWidgets NavItems={footerData.FooterNavItem} />
            </footer>
            <style jsx>{`
                footer {
                    padding: 0;
                    margin-top: 75px;
                    margin-bottom: 30px;
                    margin-left: 19%;
                    margin-right: 15%;
                }
            `}</style>
        </>
    )
}

export default Footer