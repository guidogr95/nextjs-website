// Assets
import { FaFacebookF } from 'react-icons/fa'
import { borderRadius, colors } from 'styles/theme'

const SocialShareWidget = () => {
    return (
        <>
            <div className="social-share-wrapper" >
                <a href="/" rel="noopener noreferer" className="share-btn facebook" >
                    <div className="social-icon" >
                        <FaFacebookF />
                    </div>
                    <div className="btn-underlay" >
                        Share on Facebook
                    </div>
                </a>
            </div>
            <style jsx>{`
                .social-share-wrapper {
                    position: fixed;
                    top: 30%;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                }
                .share-btn {
                    width: 40px;
                    height: 40px;
                    color: ${colors.whiteGray};
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2em;
                }
                .social-icon {
                    box-shadow: 5px 5px 20px rgba(100, 100, 100, 0.2);
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                }
                .btn-underlay {
                    position: absolute;
                    height: 100%;
                    width: 159px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 10px;
                    text-align: center;
                    top: 0;
                    left: -150px;
                    font-size: 0.7em;
                    transition: .3s ease-out all;
                    border-radius: 0 ${borderRadius} ${borderRadius} 0;
                    z-index: 1;
                }
                .share-btn:hover .btn-underlay {
                    left: 40px;
                }
                .facebook:hover .social-icon {
                    box-shadow: 1px ​-1px 2px #324c81;
                }
                .facebook .social-icon,
                .facebook .btn-underlay {
                    background: #3b5998;
                }
            `}</style>
        </>
    )
}

export default SocialShareWidget