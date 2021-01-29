import css from 'styled-jsx/css'
// theme
import { fonts } from '../../styles/theme'

export const globalStyles = css.global`
    /* fonts */
    @font-face {
        font-family: "ProximaNova";
        font-weight: normal;
        src: url("./assets/fonts/ProximaNova-Regular.otf") format("opentype");
    }
    @font-face {
        font-family: "ProximaNova";
        font-weight: bold;
        src: url("./assets/fonts/ProximaNova-Bold.otf") format("opentype");
    }
    @font-face {
        font-family: "ProximaNova";
        font-weight: 900;
        src: url("./assets/fonts/ProximaNova-ExtraBold.otf") format("opentype");
    }
    html,
    body {
        font-family: ${fonts.base};
        position: relative;
        padding: 0;
        margin: 0;
    }
    * {
        box-sizing: border-box;
    }
    textarea,
    input {
        font-family: ${fonts.base};
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`
