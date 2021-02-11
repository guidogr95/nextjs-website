import { animated } from 'react-spring'

const MagnifyinGlassShadow = ({ animation }) => {
    return (
        <animated.path
          style={animation}
          className="prefix__st0"
          d="M210.1 306.7l38.1-22c3-1.7 7.9-1.8 11.8-.4l10.5-6.1c-9.8-7.3-10.7-17.4-2.7-25.2 1.6 2.2 3.9 4.3 7 6.1 12.6 7.3 33.1 7.3 45.7 0 4.9-2.8 7.9-6.4 9-10.1 14.4 8.8 14.1 22.7-.8 31.3-14.7 8.5-38.3 8.7-53.6.7l-10.6 6.2c1.8 2.2 1.4 4.6-1.3 6.2l-38.1 22c-3.6 2.1-9.9 1.8-14.1-.6-4.1-2.4-4.5-6-.9-8.1z"
        />
    )
}

export default MagnifyinGlassShadow