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
                    height: 500px;
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
                    height: 80px;
                    left: 0;
                    top: -10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                .icon-wrapper {
                    height: 100%;
                    background: white;
                    padding: 15px;
                    width: 80px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                img {
                    height: 100%;
                }
            `}</style>
        </>
    )
}

export default GridItem