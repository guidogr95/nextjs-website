import { useSpringUtils } from 'context/springContext'

const Plug = () => {

    const { animated, useSpring, config } = useSpringUtils()

    const lineFill = useSpring({
        config: { ...config.gentle, duration: 500 },
        delay: 400,
        from: {
            strokeDasharray: 1000,
            strokeDashOffset: 1000
        },
        to: {
            strokeDashOffset: 900
        }
    })

    const Line = () => (
        <animated.path
            style={lineFill}
            d="M278.7 236.1l31.5 18.6c2 1.2 4.6-.3 4.6-2.6V235"
            opacity={0.7}
            fill="none"
            stroke="#73cfff"
            strokeWidth={1.085}
            strokeMiterlimit={10}
        />
    )

    return (
        <>
            <g id="prefix__XMLID_52_">
                <Line/>
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
        </>
    )
}

export default Plug