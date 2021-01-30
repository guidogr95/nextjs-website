// Theme
import { colors, desktopMaxWidth } from 'styles/theme'
// Assets
import Ebook from 'public/assets/media/images/ebook.svg'

const SmallHeader = () => {
    return (
        <>
            <header>
                <main>
                    <div className="textContent" >
                        <h1>whitepapers & ebooks</h1>
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
                    background-repeat: no-repeat;
                    height: 450px;
                }
                h1 {
                    text-transform: capitalize;
                    color: ${colors.gray};
                    margin-bottom: 20px;
                }
                h5 {
                    font-weight: 100;
                    line-height: 1.3;
                    color: ${colors.gray};
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
                    max-width: 562px;
                    width: 100%;
                }
                .imgContent img {
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default SmallHeader