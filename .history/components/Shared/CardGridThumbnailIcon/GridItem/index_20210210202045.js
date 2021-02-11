// Theme
import { borderRadius, colors, fonts } from 'styles/theme'
// Utils
import getPaths from 'utils/getPaths'
import Button from 'react-bootstrap/Button'
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
                    <div className="body" >
                        <span>{Title}</span>
                        <Button
                            variant="light"
                        >
                            Read More
                        </Button>
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
                    background: linear-gradient(to bottom, #38AECC, #2A165980);
                    font-family: ${fonts.secondary};
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
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .body span {
                    color: ${colors.whiteGray};
                    font-weight: 500;
                    font-size: 2em;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                }
                .body :global(button) {
                    max-width: 150px;
                }
                .a {
                    grid-column: 1 / 3;
                    grid-row: 1;
                }
                .b {
                    grid-column: 3;
                    grid-row: span 2;
                    background: linear-gradient(to bottom, #6536FF, #2A165980);
                }
                .c {
                    grid-column: 4;
                    grid-row: span 2;
                    background: linear-gradient(to bottom, #2B2D42, #2A165980);
                }
                .d {
                    grid-column: 1;
                    grid-row: span 2;
                    background: linear-gradient(to bottom, #2A1659, #2A165980);
                }
                .e {
                    grid-column: 2;
                    grid-row: span 2;
                    background: linear-gradient(to bottom, #6536FF, #2A165980);
                }
                .f {
                    grid-column: 3 / 5;
                    grid-row: 3;
                    background: linear-gradient(to bottom, #2B2D42, #2A165980);
                }
                .g {
                    grid-column: 2;
                    grid-row: 2;
                }
                .a > div,
                .f > div {
                    width: 50%;
                }
                .b,
                .c,
                .d,
                .e {
                    flex-direction: column;
                }
                .b > div,
                .c > div,
                .d > div,
                .e > div {
                    height: 50%;
                }
                .a :global(button) {
                    color: #38AECC;
                }
                .b :global(button) {
                    color: #6536FF;
                }
                .c :global(button) {
                    color: #2B2D42;
                }
                .d :global(button) {
                    color: #2A1659;
                }
                .d :global(button) {
                    color: #2A1659;
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