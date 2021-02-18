// Assets
import { FaFacebookF } from 'react-icons/fa'
import { colors } from 'styles/theme'

const SocialShareWidget = () => {
    return (
        <>
            <div className="social-share-wrapper" >
                <div className="share-btn facebook" >
                    <FaFacebookF />
                    <div className="btn-underlay" >
                        Share on Facebook
                    </div>
                </div>
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
                .btn-underlay {
                    position: absolute;
                    height: 100%;
                    width: 200px;
                    display: flex;
                    align-items: center;
                    padding: 0 10px;
                    text-align: center;
                    top: 0;
                    left: 40px;
                    font-size: 0.9em;
                    transition: .3s ease-out all;
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