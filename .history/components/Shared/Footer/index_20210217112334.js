// Components
import FooterWidgets from './FooterWidgets'

const Footer = () => {
    return (
        <>
            <footer>
                <FooterWidgets/>
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