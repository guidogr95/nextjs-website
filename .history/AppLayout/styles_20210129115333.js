import css from 'styled-jsx/css'
// theme
import { borderRadius, colors, fonts } from 'styles/theme'

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
    @font-face {
        font-family: "Roboto";
        font-weight: 600;
        src: url("./assets/fonts/Roboto-Medium.ttf") format("truetype");
    }
    @font-face {
        font-family: "Roboto";
        font-weight: lighter;
        src: url("./assets/fonts/Roboto-Light.ttf") format("truetype");
    }
    @font-face {
        font-family: "Roboto";
        font-weight: 100;
        src: url("./assets/fonts/Roboto-Thin.ttf") format("truetype");
    }
    html,
    body {
        font-family: ${fonts.base};
        position: relative;
        padding: 0;
        margin: 0;
        font-size: 1em;
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
        letter-spacing: 0.02em;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    .containerSection {
        display: flex;
        justify-content: center;
    }
    p, h1, h2, h3, h4, h5, h6 {
        margin-top: 0.46em;
        margin-bottom: 0.46em;
    }
    h1 {
        font-size: 50px;
    }
    h2 {
        font-size: 30px;
    }
    h3 {
        font-size: 25px;
    }
    h4 {
        font-size: 22px;
    }
    h5 {
        font-size: 18px;
    }
    h6 {
        font-size: 15px;
    }
    button {
        border-radius: ${borderRadius} !important;
    }
    .themeInput label {
        align-self: flex-start;
        margin-bottom: 5px;
    }
    .themeInput input {
        border-radius: ${borderRadius};
    }
`
