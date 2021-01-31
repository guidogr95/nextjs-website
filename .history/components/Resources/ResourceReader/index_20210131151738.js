import Link from 'next/link'
// Utils
import customizeHtmlContent from 'utils/customizeHtmlContent'
// Assets
import Logo from 'public/assets/media/brand/std-horizontal-color.svg'
// Theme
import { colors } from 'styles/theme'

const ResourceReader = ({ Content }) => {
    return (
        <>
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
            <style jsx>{`
                aside {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .wrapper {
                    margin: 0 22%; 
                    max-width: 540px;
                }
                .readerBorder {
                    background-color: #bdd4e7;
                    background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
                    border-radius: 5%;
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
                    border-radius: 5%;
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
                    height: 35px;
                    width: 35px;
                    background: #E7E7E8;
                    box-shadow: inset 22px 22px 44px #ababac, inset -22px -22px 44px #ffffff;
                    border: 2px solid gray;
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
            `}</style>
        </>
    )
}

export default ResourceReader