// Theme
import { borderRadius } from 'styles/theme'
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
                <div className="thumbnail-holder" />
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
                    box-shadow: 5px 5px 20px rgba(100, 100, 100, 0.2);
                    display: grid;
                    grid-template-rows: repeat(2, 50%);
                    border-radius: ${borderRadius};
                    position: relative;
                    overflow: hidden;
                    background: white;
                }
                .thumbnail-holder {
                    background: url(${thumbnail});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    position: relative;
                    overflow: hidden;
                }
                .thumbnail-holder:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(120, 120, 120, 0.5);
                }
                .body {
                    position: relative;
                    padding: 30px 10px 10px 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .icon {
                    position: absolute;
                    height: 90px;
                    left: 0;
                    top: -45px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                .icon-wrapper {
                    height: 100%;
                    background: whitesmoke;
                    padding: 25px;
                    width: 90px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                img {
                    height: 100%;
                }
                span {
                    font-size: 1.4em;
                    font-weight: 500;
                }
            `}</style>
        </>
    )
}

export default GridItem