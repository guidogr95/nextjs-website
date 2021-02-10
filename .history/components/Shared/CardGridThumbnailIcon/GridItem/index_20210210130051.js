// Theme
import { borderRadius, colors } from 'styles/theme'
// Utils
import getPaths from 'utils/getPaths'
// Constants
import { apiUrl } from 'config/constants'

const GridItem = ({ Page, Icon, Thumbnail, Title }) => {

    // const Slug = getPaths(Page, true)
    const thumbnail = `${apiUrl}${Thumbnail.url}`
    const icon = `${apiUrl}${Icon.url}`

    return (
        <>
            <article>
                <div className="thumbnail-holder">
                </div>
                <div className="body" >
                    <div className="icon" >
                        <div className="icon-wrapper" >
                            <img alt={`${Title} icon`} src={icon} />
                        </div>
                    </div>
                    <span>{Title}</span>
                </div>
            </article>
            <style jsx>{`
                article {
                    height: 350px;
                    box-shadow:  15px 15px 30px #f0f0f0, -15px -15px 30px #ffffff;
                    display: grid;
                    grid-template-rows: 2fr 0.7fr;
                    border-radius: ${borderRadius};
                    position: relative;
                    overflow: hidden;
                    background: white;
                    transition: .3s ease-out all;
                }
                article:hover .icon {
                    top: 0;
                }
                article:hover .thumbnail-holder {
                    transform: scale(1.7);
                }
                article:hover span {
                    transform: translateY(-15px);
                }
                .thumbnail-holder {
                    transition: .3s ease-out all;
                    background: url(${thumbnail});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    position: relative;
                }
                .thumbnail-holder:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(90, 90, 90, 0.6);
                }
                .body {
                    transition: .3s ease-out all;
                    position: relative;
                    padding: 30px 30px 10px 30px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
                .icon {
                    position: absolute;
                    transition: .3s ease-out all;
                    height: 70px;
                    left: 0;
                    top: -35px;
                    display: flex;
                    justify-content: flex-start;
                    padding: 0 30px;
                    align-items: center;
                    width: 100%;
                    z-index: 2;
                }
                .icon-wrapper {
                    height: 100%;
                    padding: 20px;
                    width: 70px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: ${colors.day};
                }
                img {
                    height: 100%;
                }
                span {
                    font-size: 1.4em;
                    font-weight: 500;
                    color: ${colors.lightGray};
                    transition: .3s ease-out all;
                }
            `}</style>
        </>
    )
}

export default GridItem