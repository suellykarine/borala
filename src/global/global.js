import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --orange: #FF5203;
        --blue: #27B5DD;
        --somewhatblue: #7EDAEB;
        --lightblue: #9ED9EA;
        --darkblue: #252642;
        --white: #FFFFFF;
        --grey: #868E96;
    }
    body {
        background: var(--white);
        color: var(--darkblue);
        height: 100vh;
    }
    body, input, button {
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`;
