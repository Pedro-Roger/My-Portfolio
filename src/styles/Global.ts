import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  }
  body {
    background-color: #f5f1e8;
    font-family: "Poiret One", sans-serif;
  }
  html, body, #root {
    height: 100%;
    scroll-behavior: smooth;
  }

  button {
    background-color: none;
    border: none;
    outline: none;
  }
  
  a{
    text-decoration: none;
    outline: none;
  }
`

export default GlobalStyle