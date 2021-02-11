import { useSprings, useSpring, config, animated } from 'react-spring'

const EnterRight

const enterRight = useSpring({
    config: config.slow,
    from: {
        transform: 'translateX(20px)',
        opacity: 0
    },
    to: {
        transform: 'translateX(0px)',
        opacity: 1
    }
})

const animations = {
    enterRight
}

export { useSprings, config, animated, animations }