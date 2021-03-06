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
                .facebook {
                    background: #3b5998;
                }
            `}</style>
        </>
    )
}

export default SocialShareWidget