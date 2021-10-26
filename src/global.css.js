import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
      html,body {
        margin: 0;
        padding: 0;
        font-family:'Montserrat', sans-serif;
        /* background-color: var(--color-background); */
    }
    @font-face{
    font-family: "athelas";
    font-style: normal;
    font-weight: 400;
    src:local("athelas"), url(./fonts/Athelas-Regular.ttf); /* Safari, Android, iOS */
}
`;
