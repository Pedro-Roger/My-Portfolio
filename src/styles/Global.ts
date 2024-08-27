import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
  body {
    background-color: #f5f1e8;
  }
  html, body, #root {
    height: 100%;
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