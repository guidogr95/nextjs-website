import css from 'styled-jsx/css'
// theme
import { fonts } from 'styles/theme'

export const globalStyles = css.global`
    /* fonts */
    @font-face {
        font-family: "Roboto";
        font-weight: normal;
        src: url("./assets/fonts/Roboto-Regular.ttf") format("truetype");
    }
    @font-face {
        font-family: "Roboto";
        font-weight: bold;
        src: url("./assets/fonts/Roboto-Bold.ttf") format("truetype");
    }
    @font-face {
        font-family: "Roboto";
        font-weight: 900;
        src: url("./assets/fonts/Roboto-Black.ttf") format("truetype");
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
    ul {
        margin: 0;
        padding: 0;
    }
`
