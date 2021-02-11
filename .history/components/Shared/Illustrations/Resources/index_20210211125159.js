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
    delay: 2,
    from: {
        transform: 'translateY(-20px)',
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
        <g className="prefix__st17">
          <path
            className="prefix__st18"
            d="M229.8 169.9l-5 16.2-12.6 8.7 9.6 4-2.9 16.1 10.9-14 10.8 1.4-2.8-12.8 9.6-15-12.7 5.9z"
          />
          <path
            className="prefix__st15"
            d="M253.3 177.9l-5.9-3.4-9.1 4.3v6.3c0 .1 3.8.3 4 .3.2 0 11-7.5 11-7.5zM218.9 214.9l5.9 3.4 2.9-16.1-2.9-3-3.2.5-2.7 15.2z"
          />
          <path
            className="prefix__st14"
            d="M235.7 173.3l-5 16.2-12.6 8.7 9.6 3.9-2.9 16.1 10.9-14 10.8 1.5-2.8-12.8 9.6-15-12.7 5.9z"
          />
          <path
            className="prefix__st5"
            d="M225.9 216.8l2.7-15.2-8.8-3.6 11.6-8 4.4-14.3 4.3 9.2 12.2-5.7.9-1.4-12.7 5.9-4.9-10.5-4.9 16.2-12.7 8.7 9.6 3.9-2.9 16.1 1.2-1.3z"
          />
          <path
            className="prefix__st15"
            d="M235.7 173.3l-5.9-3.4-5 16.2 5.9 3.4zM212.2 194.8l5.9 3.4 12.6-8.7-5.9-3.4z"
          />
          <path
            className="prefix__st5"
            d="M230.4 189.9l.9-.5-6.4-3.7-.1.4-.4.3z"
          />
          <g>
            <path
              className="prefix__st18"
              d="M189.4 193l-4.9 16.2-12.7 8.7 9.6 3.9-2.9 16.1 10.9-14 10.9 1.5-2.9-12.8 9.6-15-12.6 5.9z"
            />
            <path
              className="prefix__st15"
              d="M212.9 201l-5.9-3.4-9.1 4.3v6.3c0 .1 3.8.3 4 .3.3 0 11-7.5 11-7.5zM178.5 237.9l5.9 3.4 2.9-16.1-2.9-3-3.2.5-2.7 15.2z"
            />
            <path
              className="prefix__st14"
              d="M195.3 196.4l-4.9 16.2-12.7 8.7 9.6 3.9-2.9 16.1 10.9-14 10.9 1.5-2.9-12.8 9.6-15-12.6 5.9z"
            />
            <path
              className="prefix__st5"
              d="M185.6 239.8l2.7-15.2-8.8-3.6 11.6-8 4.4-14.3 4.3 9.2 12.2-5.7.9-1.4-12.7 5.9-4.9-10.5-4.9 16.2-12.7 8.7 9.6 3.9-2.9 16.1 1.2-1.3z"
            />
            <path
              className="prefix__st15"
              d="M195.3 196.4l-5.9-3.4-4.9 16.2 5.9 3.4zM171.8 217.9l5.9 3.4 12.7-8.7-5.9-3.4z"
            />
            <path
              className="prefix__st5"
              d="M190.1 213l.9-.5-6.4-3.7-.1.4-.4.3z"
            />
          </g>
          <g>
            <path
              className="prefix__st18"
              d="M149.1 216.1l-5 16.2-12.6 8.7 9.6 3.9-2.9 16.1 10.9-14 10.9 1.5-2.9-12.8 9.6-15-12.7 5.9z"
            />
            <path
              className="prefix__st15"
              d="M172.6 224.1l-5.9-3.4-9.1 4.3v6.3c0 .1 3.8.3 4 .3.2 0 11-7.5 11-7.5zM138.2 261l5.9 3.4 2.9-16.1-2.9-3-3.2.5-2.7 15.2z"
            />
            <path
              className="prefix__st14"
              d="M155 219.5l-5 16.2-12.6 8.7 9.6 3.9-2.9 16.1 10.9-14 10.9 1.5-2.9-12.8 9.6-15-12.7 5.9z"
            />
            <path
              className="prefix__st5"
              d="M145.3 262.9l2.7-15.2-8.8-3.6 11.6-8 4.4-14.3 4.3 9.2 12.2-5.7.9-1.4-12.7 5.9-4.9-10.5-4.9 16.2-12.7 8.7 9.6 3.9-2.9 16.1 1.2-1.3z"
            />
            <path
              className="prefix__st15"
              d="M155 219.5l-5.9-3.4-5 16.2 5.9 3.4zM131.5 241l5.9 3.4 12.6-8.7-5.9-3.4z"
            />
            <path
              className="prefix__st5"
              d="M149.7 236.1l.9-.5-6.3-3.7-.2.4-.4.3z"
            />
          </g>
          <g>
            <path
              className="prefix__st18"
              d="M201.7 131.6l-5 16.2-12.6 8.8 9.6 3.9-2.9 16.1 10.9-14 10.9 1.4-2.9-12.8 9.6-15-12.7 5.9z"
            />
            <path
              className="prefix__st15"
              d="M225.2 139.6l-5.9-3.4-9.1 4.3v6.3c0 .1 3.8.3 4 .3.2 0 11-7.5 11-7.5zM190.8 176.6l5.9 3.4 2.9-16.1s-2.9-3-2.8-3l-3.2.5-2.8 15.2z"
            />
            <path
              className="prefix__st14"
              d="M207.6 135l-4.9 16.2-12.7 8.7 9.6 4-2.9 16.1 10.9-14.1 10.9 1.5-2.9-12.8 9.6-15-12.7 5.9z"
            />
            <path
              className="prefix__st5"
              d="M197.9 178.5l2.7-15.2-8.8-3.6 11.6-8 4.4-14.3 4.3 9.2 12.2-5.7.9-1.4-12.7 5.9-4.9-10.5-4.9 16.2-12.7 8.7 9.6 3.9-2.9 16.1 1.2-1.3z"
            />
            <path
              className="prefix__st15"
              d="M207.6 135l-5.9-3.4-5 16.2 6 3.4zM184.1 156.6l5.9 3.3 12.7-8.7-6-3.4z"
            />
            <path
              className="prefix__st5"
              d="M202.4 151.6l.9-.5-6.4-3.7-.2.4-.4.3z"
            />
          </g>
          <g>
            <path
              className="prefix__st18"
              d="M161.4 154.7l-5 16.2-12.6 8.7 9.6 4-2.9 16.1 10.9-14.1 10.8 1.5-2.8-12.8 9.6-15-12.7 5.9z"
            />
            <path
              className="prefix__st15"
              d="M184.9 162.7l-5.9-3.4-9.1 4.3v6.3c0 .1 3.8.3 4 .3.2 0 11-7.5 11-7.5zM150.5 199.7l5.9 3.4 2.9-16.1-2.9-3-3.2.5-2.7 15.2z"
            />
            <path
              className="prefix__st14"
              d="M167.3 158.1l-5 16.2-12.6 8.7 9.6 3.9-2.9 16.1 10.9-14 10.8 1.5-2.8-12.8 9.6-15-12.7 5.9z"
            />
            <path
              className="prefix__st5"
              d="M157.5 201.6l2.7-15.2-8.8-3.6 11.6-8 4.4-14.3 4.3 9.2 12.2-5.7.9-1.4-12.7 5.9-4.9-10.5-4.9 16.2-12.7 8.7 9.6 3.9-2.9 16.1 1.2-1.3z"
            />
            <path
              className="prefix__st15"
              d="M167.3 158.1l-5.9-3.4-5 16.2 5.9 3.4zM143.8 179.6l5.9 3.4 12.6-8.7-5.9-3.4z"
            />
            <path
              className="prefix__st5"
              d="M162 174.7l.9-.5-6.4-3.7-.1.4-.4.3z"
            />
          </g>
        </g>
        <g className="prefix__st17">
          <path
            className="prefix__st4"
            d="M175.5 186.1c-3.5 2-3.5 5.3 0 7.3l59.2 34.2c1 .6 2.5.6 3.5 0s1-1.4 0-2L179 191.4c-1.6-.9-1.6-2.4 0-3.3l5.7-3.3-1.8-3-7.4 4.3z"
          />
          <path
            className="prefix__st3"
            d="M259.4 213.4l-59.2-34.2c-3.5-2-9.2-2-12.6 0l-4.6 2.7c.6 1 1.1 2 1.8 3l6.3-3.6c1.6-.9 4.1-.9 5.7 0l59.2 34.2c1 .6 2.5.6 3.5 0 .9-.7.9-1.6-.1-2.1z"
          />
          <path
            className="prefix__st3"
            d="M260.1 214.4v-83.2l-62-34.6-8.7-.6-8.4 5.4-5.2 4.5 60.5 95.9 19.8 11.6z"
          />
          <path
            className="prefix__st13"
            d="M237.2 224.9l18.5-10.7v-80.4l-19.1 8.8z"
          />
          <path
            className="prefix__st4"
            d="M172.9 106.6v83.1l65.2 37.3.8-.4v-83.3z"
          />
          <path
            className="prefix__st5"
            d="M209.6 107.2l-12.9-7.4c-1.6-.7-3.9-.7-5.4.2l-12 6.9c-.9.5-1.3 1.3-1.1 2l32.7 19.6 26.3 16.1 18.6-10.8-46.2-26.6z"
          />
          <path
            className="prefix__st3"
            d="M236.6 142V228c.6 0 1.2-.1 1.6-.4.5-.3.7-.6.7-1v-83.2l-2.3-1.4z"
          />
          <path
            className="prefix__st5"
            d="M260.1 132.2v-1h-.3l-.1.7zM238.9 144.4v-1l-.3.4z"
          />
          <path
            className="prefix__st4"
            d="M234.8 144.3l-59.2-34.2c-3.5-2-3.5-5.3 0-7.3l12-6.9c3.5-2 9.2-2 12.6 0l59.2 34.2c1 .6 1 1.4 0 2-1 .6-2.5.6-3.5 0l-59.2-34.2c-1.6-.9-4.1-.9-5.7 0l-12 6.9c-1.6.9-1.6 2.4 0 3.3l59.2 34.2c1 .6 1 1.4 0 2s-2.5.6-3.4 0z"
          />
          <path
            className="prefix__st5"
            d="M219.3 183.8L188.5 166v-30.9l30.8 17.8z"
          />
          <g>
            <path
              className="prefix__st5"
              d="M259.4 132.1c-1 .6-2.5.6-3.5 0l-59.2-34.2c-1.6-.9-4.1-.9-5.7 0l-12 6.9c-1 .6-1.4 1.4-1.1 2.2.2-.4.5-.8 1.1-1.1l12-6.9c1.6-.9 4.1-.9 5.7 0l59.2 34.2c1 .6 2.5.6 3.5 0 .7-.4.9-1 .5-1.5-.1.1-.3.3-.5.4zM238.2 144.3c-1 .6-2.5.6-3.5 0l-59.2-34.2c-1.5-.9-2.4-2-2.6-3.1-.3 1.5.6 3.1 2.6 4.2l59.2 34.2c1 .6 2.5.6 3.5 0 .7-.4.9-1 .5-1.5-.1.1-.2.3-.5.4z"
            />
          </g>
          <g>
            <path
              className="prefix__st14"
              d="M148.3 220.1c-3.5 2-3.5 5.3 0 7.3l59.2 34.2c1 .6 2.5.6 3.5 0s1-1.4 0-2l-59.2-34.2c-1.6-.9-1.6-2.4 0-3.3l5.7-3.3-1.8-3-7.4 4.3z"
            />
            <path
              className="prefix__st15"
              d="M232.2 247.3L173 213.1c-3.5-2-9.2-2-12.6 0l-4.6 2.7c.6 1 1.1 2 1.8 3l6.3-3.6c1.6-.9 4.1-.9 5.7 0l59.2 34.2c1 .6 2.5.6 3.5 0 .8-.6.8-1.5-.1-2.1z"
            />
            <path
              className="prefix__st8"
              d="M232.9 248.4v-83.3l-62.1-34.6-8.6-.5-8.4 5.4-5.2 4.5 60.5 95.9 19.7 11.6z"
            />
            <path fill="#c8b9f8" d="M209.9 258.9l18.6-10.7v-80.5l-19.1 8.9z" />
            <path
              className="prefix__st6"
              d="M145.7 140.5v83.2l65.1 37.2.9-.3v-83.3z"
            />
            <path
              className="prefix__st5"
              d="M182.3 141.2l-12.9-7.4c-1.6-.7-3.9-.7-5.4.2l-12 6.9c-.9.5-1.3 1.3-1.1 2l32.7 19.6 26.3 16.1 18.6-10.8-46.2-26.6z"
            />
            <path
              className="prefix__st8"
              d="M209.4 176V262c.6 0 1.2-.1 1.6-.4.5-.3.7-.6.7-1v-83.2l-2.3-1.4z"
            />
            <path
              className="prefix__st5"
              d="M232.9 166.2v-1.1h-.3l-.1.7zM211.7 178.4v-1.1l-.3.5z"
            />
            <path
              className="prefix__st6"
              d="M207.5 178.3l-59.2-34.2c-3.5-2-3.5-5.3 0-7.3l12-6.9c3.5-2 9.2-2 12.6 0l59.2 34.2c1 .6 1 1.4 0 2-1 .6-2.5.6-3.5 0l-59.2-34.2c-1.6-.9-4.1-.9-5.7 0l-12 6.9c-1.6.9-1.6 2.4 0 3.3l59.2 34.2c1 .6 1 1.4 0 2-.9.5-2.4.5-3.4 0z"
            />
            <path
              className="prefix__st5"
              d="M192.1 217.7l-30.8-17.8v-30.8l30.8 17.8z"
            />
            <g>
              <path
                className="prefix__st5"
                d="M232.2 166.1c-1 .6-2.5.6-3.5 0l-59.2-34.2c-1.6-.9-4.1-.9-5.7 0l-12 6.9c-1 .6-1.4 1.4-1.1 2.2.2-.4.5-.8 1.1-1.1l12-6.9c1.6-.9 4.1-.9 5.7 0l59.2 34.2c1 .6 2.5.6 3.5 0 .7-.4.9-1 .5-1.5-.1.1-.3.2-.5.4zM211 178.3c-1 .6-2.5.6-3.5 0l-59.2-34.2c-1.5-.9-2.4-2-2.6-3.1-.3 1.5.6 3.1 2.6 4.2l59.2 34.2c1 .6 2.5.6 3.5 0 .7-.4.9-1 .5-1.5-.1.1-.3.3-.5.4z"
              />
            </g>
          </g>
          <g>
            <path
              className="prefix__st4"
              d="M120.3 245.7c-3.5 2-3.5 5.3 0 7.3l59.2 34.2c1 .6 2.5.6 3.5 0s1-1.4 0-2L123.8 251c-1.6-.9-1.6-2.4 0-3.3l5.7-3.3-1.8-3-7.4 4.3z"
            />
            <path
              className="prefix__st3"
              d="M204.2 273L145 238.8c-3.5-2-9.2-2-12.6 0l-4.6 2.7c.6 1 1.1 2 1.8 3l6.3-3.6c1.6-.9 4.1-.9 5.7 0l59.2 34.2c1 .6 2.5.6 3.5 0 .9-.7.9-1.6-.1-2.1z"
            />
            <path
              className="prefix__st3"
              d="M204.9 274v-83.2l-62-34.6-8.7-.6-8.4 5.4-5.2 4.5 60.5 95.9 19.8 11.6z"
            />
            <path
              className="prefix__st13"
              d="M182 284.5l18.5-10.7v-80.4l-19.1 8.8z"
            />
            <path
              className="prefix__st4"
              d="M117.7 166.1v83.2l65.2 37.2.8-.3v-83.3z"
            />
            <path
              className="prefix__st5"
              d="M154.4 166.8l-12.9-7.4c-1.6-.7-3.9-.7-5.4.2l-12 6.9c-.9.5-1.3 1.3-1.1 2l32.7 19.6 26.3 16.1 18.6-10.8-46.2-26.6z"
            />
            <path
              className="prefix__st3"
              d="M181.4 201.6V287.6c.6 0 1.2-.1 1.6-.4.5-.3.7-.6.7-1V203l-2.3-1.4z"
            />
            <path
              className="prefix__st5"
              d="M204.9 191.8v-1h-.3l-.1.7zM183.7 204v-1l-.3.4z"
            />
            <path
              className="prefix__st4"
              d="M179.6 203.9l-59.2-34.2c-3.5-2-3.5-5.3 0-7.3l12-6.9c3.5-2 9.2-2 12.6 0l59.2 34.2c1 .6 1 1.4 0 2s-2.5.6-3.5 0l-59.2-34.2c-1.6-.9-4.1-.9-5.7 0l-12 6.9c-1.6.9-1.6 2.4 0 3.3l59.2 34.2c1 .6 1 1.4 0 2-.9.6-2.5.6-3.4 0z"
            />
            <path
              className="prefix__st5"
              d="M164.1 243.3l-30.8-17.7v-30.9l30.8 17.8z"
            />
            <g>
              <path
                className="prefix__st5"
                d="M204.2 191.7c-1 .6-2.5.6-3.5 0l-59.2-34.2c-1.6-.9-4.1-.9-5.7 0l-12 6.9c-1 .6-1.4 1.4-1.1 2.2.2-.4.5-.8 1.1-1.1l12-6.9c1.6-.9 4.1-.9 5.7 0l59.2 34.2c1 .6 2.5.6 3.5 0 .7-.4.9-1 .5-1.5-.1.1-.3.3-.5.4zM183 203.9c-1 .6-2.5.6-3.5 0l-59.2-34.2c-1.5-.9-2.4-2-2.6-3.1-.3 1.5.6 3.1 2.6 4.2l59.2 34.2c1 .6 2.5.6 3.5 0 .7-.4.9-1 .5-1.5-.1.1-.2.3-.5.4z"
              />
            </g>
          </g>
        </g>
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
