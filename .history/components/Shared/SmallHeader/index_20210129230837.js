// Theme
import { colors, desktopMaxWidth } from 'styles/theme'
// Assets
import Ebook from 'public/assets/media/images/elearning-01.svg'

const SmallHeader = () => {
    return (
        <>
            <header>
                <main>
                    <div className="textContent" >
                        <h1>whitepapers & e-books</h1>
                        <h5>Expand your knowledge on cloud computing, in addition to VEXXHOST's extensive offering of enterprise grade solutions through the collection of resources below.</h5>
                    </div>
                    <div className="imgContent" >
                        <img alt="ebooks" src={Ebook} />
                    </div>
                </main>
            </header>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: center;
                    background-size: cover;
                    background: linear-gradient(to right, #8e2de2, #4a00e0);
                    background-repeat: no-repeat;
                    height: 400px;
                }
                h1 {
                    text-transform: capitalize;
                    color: ${colors.whiteGray};
                    margin-bottom: 20px;
                    letter-spacing: 0.02em;
                }
                h5 {
                    font-weight: 100;
                    line-height: 1.4;
                    color: ${colors.whiteGray};
                    padding-right: 15%;
                }
                main {
                    max-width: ${desktopMaxWidth};
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .textContent {
                    padding-left: 5%;
                    max-width: 62%;
                    position: relative;
                }
                .imgContent {
                    flex: 0 0 100%;
                    margin: 50px auto;
                    max-width: 600px;
                    width: 100%;
                }
                .imgContent img {
                    width: 100%;
                    margin-top: 40px;
                }
            `}</style>
        </>
    )
}

export default SmallHeader