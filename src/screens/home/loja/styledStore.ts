import styled from "styled-components";


export const SylesStore = styled.div`
    display: flex ;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 256px;
    height: 310px;
    padding: 1rem;
    border-radius: 6px 36px;

    background-color: ${(props) => props.theme['gray-400']};
`

export const StyledImgCoffe = styled.div`
  margin-top: calc(0px - 2rem - 6px);
  
  p{
    margin: 10px 15px;
    padding: 2px 4px;
    border-radius: 100px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']} ;
  }
`