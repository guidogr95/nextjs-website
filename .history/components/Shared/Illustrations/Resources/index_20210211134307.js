// Component
import BottomCube from './BottomCube'
import BottomCubeShadow from './BottomCubeShadow'
import TopCube from './TopCube'
import TopCubeShadow from './TopCubeShadow'
import MagnifyingGlass from './MagnifyingGlass'
import MagnifyingGlassShadow from './MagnifyingGlassShadow'
import Phone from './Phone'
import PhoneShadow from './PhoneShadow'
import TextBubble from './TextBubble'
// Utils
import { useSpring, config } from 'react-spring'

function Resources (props) {

  const descend = useSpring({
    config: config.slow,
    from: {
        transform: 'translateY(40px)',
        opacity: 0
    },
    to: {
        transform: 'translateY(0px)',
        opacity: 1
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
      <PhoneShadow />
      <g>
        <Phone animation={descend} />
        <MagnifyingGlassShadow />
        <MagnifyingGlass animation={descend} />
        <TextBubble animation={descend} />
        <TopCube animation={descend} />
        <BottomCube animation={descend} />
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
        <TopCubeShadow />
      </g>
      <g>
        <BottomCubeShadow />
      </g>
    </svg>
  )
}

export default Resources
