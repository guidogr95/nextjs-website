// Theme
import { borderRadius, colors } from 'styles/theme'
// Utils
import useProgressiveImage from 'utils/useProgressiveImage'
import Link from 'next/link'
// Constants
import { apiUrl } from 'config/constants'

const ResourceBanner = (props) => {

    console.log(props)
    const {
        Resource
    } = props

    const thumbnail = Resource?.BookCover ? `${apiUrl}${Resource.BookCover.url}` : '/'

    const loaded = useProgressiveImage(thumbnail)

    if (!Resource) return null

    return (
        <>
            <div className="banner-container" >
                <div className="banner-text" >
                    <h3>{Resource?.Title || ''}</h3>
                    <Link href={`/white-paper/${Resource.Slug}`} >
                        <a className="btn btn-light" >
                            Download Now
                        </a>
                    </Link>
                </div>
                <div className="banner-thumbnail" >
                    <div className={`thumbnail ${!loaded ? 'loading' : ''}`} />
                </div>
            </div>
            <style jsx>{`
                .banner-container {
                    background: linear-gradient(to left, #6536ff, #2a1659);
                    min-height: 300px;
                    width: 100%;
                    border-radius: ${borderRadius};
                    margin-top: 45px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    column-gap: 15px;
                }
                .banner-text {
                    padding: 20px;
                    color: ${colors.whiteGray};
                }
                .banner-thumbnail {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .thumbnail {
                    width: 45%;
                    padding-bottom: 60%;
                    border-radius: ${borderRadius};
                    background: url(${thumbnail});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    box-shadow: 5px 5px 20px rgba(100, 100, 100, 0.4);
                }
                .thumbnail.loading {
                    animation: loadingAnimation 1s infinite;
                }
                h3 {
                    line-height: 1.6;
                    font-weight: 400;
                    letter-spacing: 0.02em;
                }
                @keyframes loadingAnimation {
                    0% {
                        background-color: #fff;
                    }
                    50% {
                        background-color: #ccc;
                    }
                    100% {
                        background-color: #fff;
                    }
                }
            `}</style>
        </>
    )
}

export default ResourceBanner