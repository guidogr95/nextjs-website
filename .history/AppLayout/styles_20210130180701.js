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
        font-family: ${fonts.base} !important;
        position: relative;
        padding: 0;
        margin: 0;
        font-size: 1em;
    }
    * {
        box-sizing: border-box;
    }
    textarea,
    input,
    button {
        font-family: ${fonts.base} !important;
    }
    a {
        color: inherit;
        text-decoration: none;
        letter-spacing: 0.02em;
    }
    a:hover {
        text-decoration: none;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    .containerSection {
        display: flex;
        justify-content: center;
    }
    .sectionTitle {
        margin-bottom: 30px;
        text-transform: capitalize;
    }
    .btn-primary.btn-brand {
        background: linear-gradient(to right, #8e2de2, #4a00e0);
        box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
        padding: 0.6rem 0.75rem;
    }
`
