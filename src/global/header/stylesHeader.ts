import styled from "styled-components";


export const LayoutContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem 1rem 10rem;
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

    background-color: ${(props) => props.theme['purple-light']};

    &:hover {
        background-color: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme['purple-light']}
      }
`

export const StyleCheckout = styled.div`
    padding: 8px;
    gap: 0.3rem;
    align-items: center;
    border-radius: 6px;
    
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    &:hover {
        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['yellow-light']}
      }
`