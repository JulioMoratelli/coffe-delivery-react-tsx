import { createGlobalStyle } from 'styled-components'

export const defultTheme = {
    white: '#FFFFFF',
  
    'gray-100': '#FAFAFA',
    'gray-200': '#F3F2F2',
    'gray-300': '#EDEDED',
    'gray-400': '#E6E5E5',
    'gray-500': '#D7D5D5',
    'gray-600': '#8D8686',
    'gray-700': '#574F4D',
    'gray-800': '#403937',
    'gray-900': '#272221',
  
    'yellow-dark': '#C47F17',
    'yellow': '#DBAC2C',
    'yellow-light': '#F1E9C9',
  
    'purple-dark': '#4B2995',
    'purple': '#8047F8',
    'purple-light': '#EBE5F9',
}


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-900']};
        -webkit-font-smoothing: antialiased
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif; 
        font-weight: 400;
        font-size: 1rem;
    }

`