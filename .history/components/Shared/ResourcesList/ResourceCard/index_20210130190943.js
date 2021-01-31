// Theme
import { borderRadius, colors } from 'styles/theme'
// Constants
import { apiUrl } from 'config/constants'
// Components
import Button from 'react-bootstrap/Button'

const ResourceCard = ({ resourceData }) => {
    const thumbnail = `${apiUrl}${resourceData.Resource.Thumbnail.url}`
    return (
        <>
            <article>
                <Button
                    type="submit"
                    variant="outline-primary"
                >
                    <span>Sign Me Up</span>
                </Button>
            </article>
            <style jsx>{`
                article :global(.btn) {
                    position: relative;
                    transition: .3 ease-out all;
                }
                article :global(.btn span) {
                    position: relative;
                    z-index: 2;
                    color: ${colors.whiteGray};
                }
                article :global(.btn:after) {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to right, #8e2de2, #4a00e0);
                    right: 100%;
                    top: 0;
                    z-index: 1;
                    transition: .3 ease-out all;
                }
                article:hover :global(.btn:after) {
                    right: 0;
                }
                article {
                    width: 100%;
                    height: 300px;
                    background: url(${thumbnail});
                    background-size: cover;
                    background-repeat: no-repeat;
                    border-radius: ${borderRadius};
                    position: relative;
                    transition: 0.4s ease-out;
                    box-shadow: 0px 7px 20px rgba(70, 70, 70, 0.1);
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                article:hover {
                    transform: translateY(-10px);
                    box-shadow: 0px 7px 20px rgba(70, 70, 70, 0.5);
                }
                article:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    background: rgba(200, 200, 200, 0.3);
                    backdrop-filter: blur(.4px);
                    opacity: 0;
                    transition: 0.4s ease-out;
                }
                article:hover:after {
                    opacity: 1;
                }
            `}</style>
        </>
    )
}

export default ResourceCard