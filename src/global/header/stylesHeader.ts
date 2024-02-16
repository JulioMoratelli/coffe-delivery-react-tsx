import styled from "styled-components";


export const LayoutContainer = styled.header`
    display: flex;
    margin: auto;
    max-width: 1200px;
    width: 100%;
    justify-content: space-between;
    padding-top: 2rem;
`

export const NavBar = styled.nav`
    display: flex;
    gap: 1rem;
`


export const StyleLocation = styled.div`
    display: flex;
    gap: 0.3rem;
    padding: 10px;
    align-items: center;
    border-radius: 6px; 
    font-weight: bold;
    text-decoration: none;
    background-color: ${(props) => props.theme['purple-light']};
    transition: 0.3s;

    &:hover {
        background-color: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme['purple-light']}
      }
  
`

export const StyleCheckout = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 6px;
    
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    &:hover {
        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['yellow-light']}
      }


    div {
      width: 10px;
      align-items: center;
      display: flex;
      height: 13px;
      padding: 2px;
      

      border-radius: 100%;
      background-color: red;
      color: black;
      pointer-events: none;

    }

    span {

    }
`

export const IconLogin = styled.div`
    display: flex;
    align-items: center;
    padding: 6.5px;
    border-radius: 6px;
    
    background-color: #CBE4FF;
    color: #0079FF;

    &:hover {
        background-color: #0079FF;
        color: #CBE4FF;
      }
`