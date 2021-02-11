import { animated } from 'react-spring'

const BottomCubeShadow = ({ animation }) => {
    return (
        <animated.path
            style={animation}
            className="prefix__st0"
            d="M32.8 315.6L18 307.1l14.8-8.5 14.8 8.5z"
        />
    )
}

export default BottomCubeShadow