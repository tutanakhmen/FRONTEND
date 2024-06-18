import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* CSS Reset */

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(0, 0, 0, 0.87);
  background-color: #ffffff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body { 
    font-family: "Montserrat", sans-serif;
}
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 
`

export default GlobalStyle