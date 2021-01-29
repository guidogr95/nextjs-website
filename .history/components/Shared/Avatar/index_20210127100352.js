import { colors } from "styles/theme"

const Avatar = ({ showHalfCircle, halfCircleColor, picture }) => {
    return (
        <>
            <div>
                <a className="avatar-link" href="#" >
                    <img alt="profile picture" src="https://strapi-vexxhost.tk/uploads/hnaser_bc277b68e6.png" />
                </a>
                <svg className="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
                </svg>
            </div>
            <style jsx>{`
                .avatar-link img {
                    display: block;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin: 16px 10px;
                }
                .half-circle {
                    position: absolute;
                    bottom: 0;
                    display: ${showHalfCircle ? 'initial' : 'none'};
                    left: 0;
                    width: 60px;
                    height: 48px;
                    fill: none;
                    stroke: ${halfCircleColor || colors.day};
                    stroke-width: 8;
                    stroke-linecap: round;
                }
            `}</style>
        </>
    )
}

export default Avatar