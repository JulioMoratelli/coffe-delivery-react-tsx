import styled from "styled-components";


export const StyleBanner = styled.article`
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
    color: ${(props) => props.theme['gray-900']};
`

export const StyleTitle = styled.p`
    display: flex;
    font-family: 'Baloo 2';
    font-size: 48px;
    font-weight: 800;
    width: 600px;
    padding: 2rem 2rem 1rem 0;
`

export const StyledSubText = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    padding: 0 0 2rem 0;
    width: 600px;
    color: ${(props) => props.theme['gray-800']};
`

//--------------------------------------------------------------------------------------------------


export const GlobalIcons = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    gap: 10px;
    flex-wrap: wrap;

    div{
        display: flex;
        padding: 5px;
    }
    
    svg{
        border-radius: 50%;
        height: 35px;
        width: 35px;
        padding: 7px;
        background-color: ${(props) => props.theme['purple-dark']};
    }

    p {
        font-family: 'Roboto';
        font-weight: 400px;
        font-size: 16px;
        margin-top: auto;
        margin-bottom: auto;
    }
`