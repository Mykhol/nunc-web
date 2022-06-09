import {createGlobalStyle} from "styled-components";
import normalize from "styled-normalize";


const GlobalStyle = createGlobalStyle`

  ${normalize};
  
  * {
    font-family: 'Lexend Deca', sans-serif;
  }

`

export default GlobalStyle