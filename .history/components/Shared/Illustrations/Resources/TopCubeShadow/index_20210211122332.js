import { animated } from 'react-spring'

const TopCubeShadow = ({ animation }) => {
    return (
        <animated.path
            style={animation}
            className="prefix__st0"
            d="M320.4 124.6l-14.2-8.2 14.2-8.2 14.2 8.2z"
        />
    )
}

export default TopCubeShadow