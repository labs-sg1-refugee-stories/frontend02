import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  html, body {
    font-family: 'Fira Sans';
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
    font-size: 2.0rem;
   
  }

  a {
      font-size: 1.6rem;
      text-decoration: none
  }

  li {
      list-style:none;
      font-size: 1.8rem
  }
  
  img {
    max-width: 100%;
    height: auto;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
body {
  margin: 0;
  font-family: 'Karla', sans-serif;
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}
  
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
  }
  
  .content-margin{
    margin: 0 2.8rem;
  }`;
