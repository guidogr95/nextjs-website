// Theme
import { borderRadius, colors } from 'styles/theme'
// Utils
import getPaths from 'utils/getPaths'
// Constants
import { apiUrl } from 'config/constants'

const GridItem = ({ Page, Icon, Thumbnail, Title, index }) => {

    // const Slug = getPaths(Page, true)
    const thumbnail = `${apiUrl}${Thumbnail.url}`
    const icon = `${apiUrl}${Icon.url}`

    const gridLayouts = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g'
    }

    return (
        <>
            <article className={gridLayouts[index + 1]} >
                {/* <div className="thumbnail-holder">
                </div>
                <div className="body" >
                    <div className="icon" >
                        <div className="icon-wrapper" >
                            <img alt={`${Title} icon`} src={icon} />
                        </div>
                    </div>
                    <span>{Title}</span>
                </div> */}
                    <div className="body" >
                        <span>{Title}</span>
                    </div>
                    <div className="thumbnail-wrapper" >
                        <img alt={`${Title} icon`} src={thumbnail} />
                    </div>
            </article>
            <style jsx>{`
                article {
                    height: 100%;
                    box-shadow:  15px 15px 30px #f0f0f0, -15px -15px 30px #ffffff;
                    border-radius: ${borderRadius};
                    position: relative;
                    overflow: hidden;
                    background: ${colors.day};
                    transition: .3s ease-out all;
                    display: flex;
                    background: linear-gradient(to bottom, #6536FF, #2A165980);
                }
                .thumbnail-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .thumbnail-wrapper img {
                    height: 100%;
                }
                .body {
                    padding: 25px;
                }
                .body span {
                    color: ${colors.whiteGray};
                    font-weight: 500;
                    font-size: 1.8em;
                    letter-spacing: 0.04em;
                }
                .a {
                    grid-column: 1 / 3;
                    grid-row: 1;
                }
                .a > div {
                    width: 50%;
                }
                .b {
                    grid-column: 3;
                    grid-row: span 2;
                }
                .c {
                    grid-column: 4;
                    grid-row: span 2;
                }
                .d {
                    grid-column: 1;
                    grid-row: span 2;
                }
                .e {
                    grid-column: 2;
                    grid-row: span 2;
                }
                .f {
                    grid-column: 3 / 5;
                    grid-row: 3;
                }
                .g {
                    grid-column: 2;
                    grid-row: 2;
                }
                /* article:hover .icon {
                    top: 0;
                }
                article:hover .thumbnail-holder {
                    transform: scale(1.7);
                }
                article:hover span {
                    transform: translateY(-10px);
                    color: ${colors.whiteGray};
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
                    transition: .3s ease-out all;
                    background: rgba(80, 80, 80, 0.6);
                }
                .body {
                    transition: .3s ease-out all;
                    position: relative;
                    padding: 20px 30px 20px 110px;
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
                    text-align: right;
                } */
            `}</style>
        </>
    )
}

export default GridItem