import React from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider} from 'styled-components'
import { defultTheme, GlobalStyle } from "./global"
import { Router } from "./Router"


export function App() {
  return (
    <ThemeProvider theme={defultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider> 
  )
}

