// Assets
import { FaFacebookF } from 'react-icons/fa'
import { borderRadius, colors } from 'styles/theme'

const SocialShareWidget = () => {
    return (
        <>
            <div className="social-share-wrapper" >
                <a href="/" rel="noopener noreferer" className="share-btn facebook" >
                    <FaFacebookF />
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
                    box-shadow: 5px 5px 20px rgba(100, 100, 100, 0.2);
                }
                .btn-underlay {
                    position: absolute;
                    height: 100%;
                    width: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 10px;
                    text-align: center;
                    top: 0;
                    left: -200px;
                    font-size: 0.9em;
                    transition: .3s ease-out all;
                    opacity: 0;
                    border-radius: 0 ${borderRadius} ${borderRadius} 0;
                }
                .share-btn:hover .btn-underlay {
                    left: 40px;
                    opacity: 1;
                }
                .facebook,
                .facebook .btn-underlay {
                    background: #3b5998;
                }
            `}</style>
        </>
    )
}

export default SocialShareWidget