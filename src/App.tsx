import React from "react"
import { ThemeProvider} from 'styled-components'
import { defultTheme, GlobalStyle } from "./global"


export function App() {
  return (
    <ThemeProvider theme={defultTheme}>
      <p>Hello World</p>
      <GlobalStyle />
    </ThemeProvider> 
  )
}

