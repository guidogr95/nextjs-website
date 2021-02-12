// Components
import Hat from './Hat'
import Laptop from './Laptop'

function Whitepaper (props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.7 360" {...props}>
      <style>
        {
          '.prefix__st5{fill:#fff}.prefix__st8{fill:#396bb3}.prefix__st9{fill:#d5ebff}.prefix__st10{fill:#0a2982}.prefix__st11{fill:#b0d1ea}.prefix__st13{fill:#c9ccd3}.prefix__st14{fill:#f7f7f7}.prefix__st15{fill:#b6d8f2}.prefix__st16{fill:#ed8406}.prefix__st17{fill:#fbc006}.prefix__st18{fill:#205ce1}.prefix__st21,.prefix__st22{fill:none;stroke:#fff;stroke-width:1.085;stroke-miterlimit:10}.prefix__st22{stroke-linecap:round;stroke-linejoin:round}'
        }
      </style>
      <g id="prefix__OBJECTS">
        <path
          d="M278.7 236.1l31.5 18.6c2 1.2 4.6-.3 4.6-2.6V235"
          opacity={0.7}
          fill="none"
          stroke="#73cfff"
          strokeWidth={1.085}
          strokeMiterlimit={10}
        />
        <g id="prefix__XMLID_52_">
          <path
            id="prefix__XMLID_285_"
            opacity={0.2}
            fill="#fff"
            d="M345.6 252.1L309.3 230v-36.6l36.3 22.1v29.2z"
          />
          <path
            id="prefix__XMLID_284_"
            className="prefix__st5"
            d="M336.5 253l-36.3-22.1v-36.6l36.3 22.1v29.2z"
          />
          <path
            id="prefix__XMLID_277_"
            fill="#e15f52"
            d="M313.4 214.5l10 10.1-10 4.2z"
          />
        </g>
        <Laptop />
        <Hat />
        <g>
          <path
            className="prefix__st21"
            d="M243.9 84.9c.6 1.4 0 2.4-1.4 2.4s-2.9-1.1-3.5-2.4c-.6-1.4 0-2.4 1.4-2.4 1.4-.1 2.9 1 3.5 2.4zM120 116.8c.6 1.4 0 2.4-1.4 2.4s-2.9-1.1-3.5-2.4c-.6-1.4 0-2.4 1.4-2.4 1.3 0 2.9 1.1 3.5 2.4z"
          />
          <path
            className="prefix__st22"
            d="M79.8 59.8v4.4M81.9 63.1l-4.2-2.4M297.3 69.3v4.5M299.4 72.6l-4.2-2.4"
          />
          <g>
            <path className="prefix__st22" d="M370.9 217.4l-4.2-2.4" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Whitepaper
