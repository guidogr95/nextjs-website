import { useEffect, useState } from 'react'
// Assets
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaFacebookMessenger } from 'react-icons/fa'
// Theme
import { borderRadius, colors } from 'styles/theme'
// Utils
import { useSpringUtils } from 'context/springContext'

const WidgetContainer = ({ style, url }) => {
    return (
        <>
            <div className="social-share-wrapper" style={style} >
                <a href={`https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=${encodeURIComponent(url)}%2F&display=popup&ref=plugin&src=share_button`} target="_blank" rel="noopener noreferrer" className="share-btn facebook" >
                    <div className="social-icon" >
                        <FaFacebookF />
                    </div>
                    <div className="btn-underlay" >
                        Share on Facebook
                    </div>
                </a>
                <a href={`fb-messenger://share/?link=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="share-btn messenger" >
                    <div className="social-icon" >
                        <FaFacebookMessenger />
                    </div>
                    <div className="btn-underlay" >
                        Share on Messenger
                    </div>
                </a>
                <a href={`https://twitter.com/intent/tweet?text=&url=${encodeURIComponent(url)}&related=`} target="_blank" rel="noopener noreferrer" className="share-btn twitter" >
                    <div className="social-icon" >
                        <FaTwitter />
                    </div>
                    <div className="btn-underlay" >
                        Share on Twitter
                    </div>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className="share-btn linkedin" >
                    <div className="social-icon" >
                        <FaLinkedinIn />
                    </div>
                    <div className="btn-underlay" >
                        Share on LinkedIn
                    </div>
                </a>
            </div>
            <style jsx>{`
                .social-share-wrapper {
                    position: fixed;
                    top: 20%;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                }
                .share-btn {
                    width: 50px;
                    height: 50px;
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
                    transition: .3s ease-out all;
                }
                .btn-underlay {
                    position: absolute;
                    height: 100%;
                    width: 150px;
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
                .share-btn .social-icon :global(svg) {
                    transition: .3s ease-out all;
                }
                .share-btn:hover .social-icon :global(svg) {
                    transform: translateX(2px);
                }
                .share-btn:hover .btn-underlay {
                    left: 50px;
                }
                .facebook:hover .social-icon {
                    box-shadow: 1px -1px 2px #324c81;
                }
                .facebook .social-icon,
                .facebook .btn-underlay {
                    background: #3b5998;
                }
                .twitter:hover .social-icon {
                    box-shadow: 1px -1px 2px #0092ca;
                }
                .twitter .social-icon,
                .twitter .btn-underlay {
                    background: #00acee;
                }
                .linkedin:hover .social-icon {
                    box-shadow: 1px -1px 2px #0957a5;
                }
                .linkedin .social-icon,
                .linkedin .btn-underlay {
                    background: #0A66C2;
                }
                .messenger:hover .social-icon {
                    box-shadow: 1px -1px 2px #0957a5;
                }
                .messenger .social-icon,
                .messenger .btn-underlay {
                    background: linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%);
                }
            `}</style>
        </>
    )
}

const SocialShareWidget = () => {

    const [url, setUrl] = useState('')
    const [active, setActive] = useState(true)

    const { config, Transition } = useSpringUtils()

    useEffect(() => {
        if (!window) return
        setUrl(window.location.href)
    }, [])

    return (
        <>
            <Transition
                items={active}
                config={{ ...config.wobbly, duration: 300 }}
                from={{ left: '-50px' }}
                enter={{ left: '0px' }}
                leave={{ left: '-50px' }}>
                {show => show && (style => <WidgetContainer style={style} url={url} />)}
            </Transition>
        </>
    )
}

export default SocialShareWidget