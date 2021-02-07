import css from 'styled-jsx/css'
// theme
import { borderRadius, colors, fonts } from 'styles/theme'

export const globalStyles = css.global`
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
        margin-bottom: 45px;
        text-transform: capitalize;
    }
    .btn {
        min-width: 140px;
    }
    .btn-brand {
        background: linear-gradient(to right, #8e2de2, #4a00e0);
        box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
        color: ${colors.whiteGray};
    }
    .btn-brand:hover {
        color: ${colors.whiteGray};
    }
    @keyframes loadingAnimation {
        0% {
            background-color: #fff;
        }
        50% {
            background-color: #ccc;
        }
        100% {
            background-color: #fff;
        }
    }
`
