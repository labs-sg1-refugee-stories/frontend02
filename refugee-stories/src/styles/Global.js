import { createGlobalStyle } from 'styled-components'

export const GlobalStyle =createGlobalStyle`

* {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  html, body {
    font-family: 'Fira Sans';
    background-color:#33313b;
    
  
}
  
  h1, h2, h3, h4, h5 {
    font-family: 'Fira Sans';
  }
  
  h1 {
    font-size: 4rem;
  }
  
  h2 {
    font-size: 3.2rem;
    padding-bottom: 10px;
  }
  
  h4 {
    font-size: 2.5rem;
    padding-bottom: 10px;
  }
  
  p {
    line-height: 1.5;
    font-size: 1.6rem;
    padding-bottom: 10px;
  }

  a {
      font-size: 1.6rem
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  .container {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }
  
  .content-margin{
    margin: 0 2.8rem;
  }`

