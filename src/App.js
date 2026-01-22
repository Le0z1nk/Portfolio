import React from 'react'
import Header from "./Components/Header/header.js"
import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}
body {
  background-color: rgb(9, 11, 23);
}
`

export default function App() {
  return(
    <>
    <GlobalStyle />
    <Header />
    </>
  )
}