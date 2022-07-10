import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
export const GlobalStyle = createGlobalStyle`

  :root{
    --primary-blue: #0F52BA;
    --white: white;
    --black: black;
    --base-gray: #2C2C2C;
    --primary-gray: #373737;
    --secundary-gray: #EEEEEE;
;
    font-size: 62.5%;  /* 1rem = 10px */
;
  }

  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  `;

export const AppStyle = styled.div`
  display: grid;
  grid-template-rows: 10.1rem auto 3.4rem;
  width: 100%;
  height: 100vh;
`