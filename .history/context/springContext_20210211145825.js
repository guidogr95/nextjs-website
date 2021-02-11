import { createContext, useContext } from 'react'
import { useSprings, useSpring, config, animated } from 'react-spring'

const springContext = createContext()

export function ProvideSpring({ children }) {
  const auth = useProvideSpring()
  return <springContext.Provider value={auth}>{children}</springContext.Provider>
}

export const useSpringUtils = () => {
  return useContext(springContext)
}

function useProvideSpring () {

    const enterRight = (options) => {

        const { duration } = options

        return useSpring({
            config: { ...config.slow, duration },
            from: {
                transform: 'translateX(-60px)',
                opacity: 0
            },
            to: {
                transform: 'translateX(0px)',
                opacity: 1
            }
        })
    }

    const animations = {
        enterRight
    }

    return {
        useSpring,
        useSprings,
        animated,
        config,
        animations
    }
}
