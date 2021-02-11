// Component
import BottomCube from './BottomCube'
import BottomCubeShadow from './BottomCubeShadow'
import TopCube from './TopCube'
import TopCubeShadow from './TopCubeShadow'
import MagnifyingGlass from './MagnifyingGlass'
import MagnifyingGlassShadow from './MagnifyingGlassShadow'
import Phone from './Phone'
import PhoneShadow from './PhoneShadow'
// Utils
import { useSpring, config } from 'react-spring'

function Resources (props) {

  const descend = useSpring({
    config: config.gentle,
    delay: 5,
    from: {
        transform: 'translateY(-40px)',
        opacity: 0
    },
    to: {
        transform: 'translateY(0px)',
        opacity: 1
    }
  })

  const descendShadow = useSpring({
    config: config.gentle,
    from: {
        transform: 'translateY(-5px)',
        opacity: 0
    },
    to: {
        transform: 'translateY(0px)',
        opacity: 0.2
    }
  })

  return (
    <svg
      id="prefix__res"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 366.7 360"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          '.prefix__st0{opacity:.2;fill:#6536ff}.prefix__st2{fill:#173d7a}.prefix__st3{fill:#5793ce}.prefix__st4{fill:#d4ecff}.prefix__st5{fill:#fff}.prefix__st6{fill:#6536ff}.prefix__st7{opacity:.5;fill:#d4ecff}.prefix__st8{fill:#5137d1}.prefix__st9{fill:#392f89}.prefix__st10{fill:#983be9}.prefix__st11{opacity:.3}.prefix__st13{fill:#79b1e0}.prefix__st14{fill:#ff2c9c}.prefix__st15{fill:#d3008d}.prefix__st17{clip-path:url(#prefix__SVGID_2_)}.prefix__st18{fill:#e8a200}'
        }
      </style>
      <PhoneShadow animation={descendShadow} />
      <Phone animation={descend} />
      <g>
        <MagnifyingGlassShadow animation={descendShadow} />
        <MagnifyingGlass animation={descend} />
      </g>
      <g>
        <defs>
          <path
            id="prefix__SVGID_7_"
            d="M111.5 185.6l69.9 38.8 96.9-55.8 1.6-83.9-64.6-10.5-101 70.4z"
          />
        </defs>
        <clipPath id="prefix__SVGID_2_">
          <use xlinkHref="#prefix__SVGID_7_" overflow="visible" />
        </clipPath>
      </g>
      <g>
        <TopCubeShadow animation={descendShadow} />
        <TopCube animation={descend} />
      </g>
      <g>
        <BottomCubeShadow animation={descendShadow} />
        <BottomCube animation={descend} />
      </g>
      <g>
        <path
          className="prefix__st9"
          d="M170.1 53.5l-36.9-21.3c-.7-.4-1.4-.4-1.9-.2l-3.6 2.1s1.6.6 2.5.9v26.9c0 2.2 1.3 4.7 3 5.7L168.5 88v3.2l3.6-2.1c.6-.4 1-1.2 1-2.4V59.2c0-2.2-1.3-4.7-3-5.7z"
        />
        <path
          className="prefix__st6"
          d="M166.5 91l-36.9-21.3c-1.6-.9-3-3.5-3-5.7V36.6c0-2.2 1.3-3.2 3-2.2l36.9 21.3c1.6.9 3 3.5 3 5.7v27.5c0 2.1-1.4 3.1-3 2.1z"
        />
        <path
          className="prefix__st5"
          d="M167.4 55l-36.9-21.3c-1-.6-2-.4-2.5.4.5-.1 1 0 1.6.3l36.9 21.3c1.6.9 3 3.5 3 5.7v27.5c0 .8-.2 1.4-.5 1.9.8-.2 1.4-1.1 1.4-2.5V60.7c0-2.2-1.4-4.8-3-5.7z"
        />
        <g>
          <path
            className="prefix__st5"
            d="M142 60.2c0 1.6-1.1 2.2-2.5 1.4-1.4-.8-2.5-2.7-2.5-4.3 0-1.6 1.1-2.2 2.5-1.4 1.4.8 2.5 2.8 2.5 4.3zM149.5 64.6c0 1.6-1.1 2.2-2.5 1.4-1.4-.8-2.5-2.7-2.5-4.3 0-1.6 1.1-2.2 2.5-1.4 1.4.8 2.5 2.7 2.5 4.3zM157.1 69c0 1.6-1.1 2.2-2.5 1.4-1.4-.8-2.5-2.7-2.5-4.3 0-1.6 1.1-2.2 2.5-1.4 1.4.7 2.5 2.7 2.5 4.3z"
          />
        </g>
      </g>
    </svg>
  )
}

export default Resources
