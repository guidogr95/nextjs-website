import { useEffect, useRef, useState } from 'react'
// Theme
import { borderRadius, colors, fonts } from 'styles/theme'
// Utils
import getPaths from 'utils/getPaths'
import Button from 'react-bootstrap/Button'
// Constants
import { apiUrl } from 'config/constants'
// Context
import { useSpringUtils } from 'context/springContext'
import useOnScreen from 'utils/useOnScreen'

const GridItem = ({ Page, Thumbnail, Title, index }) => {

    const ref = useRef()
    const [show, setShow] = useState(false)

    const { animated, animations } = useSpringUtils()
    const { enterTop } = animations

    const onScreen = useOnScreen(ref, '-250px')

    // const Slug = getPaths(Page, true)
    const thumbnail = `${apiUrl}${Thumbnail.url}`

    const gridLayouts = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g'
    }

    useEffect(() => {
        (onScreen && !show) && setShow(true)
    }, [onScreen])

    return (
        <>
            <article className={gridLayouts[index + 1]} ref={ref} >
                    <div className="body" >
                        <span>{Title}</span>
                        <Button
                            variant="light"
                        >
                            Read More
                        </Button>
                    </div>
                    <div className="thumbnail-wrapper" >
                        {show &&
                            <animated.img
                                alt={`${Title} icon`}
                                src={thumbnail}
                                style={enterTop}
                            />
                        }
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
                .thumbnail-wrapper :global(img) {
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
            `}</style>
        </>
    )
}

export default GridItem