import styled from "styled-components";


export const StyledStore = styled.div`
    display: flex ;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 256px;
    height: 310px;
    padding: 1rem;
    border-radius: 6px 36px;

    background-color: ${(props) => props.theme['gray-300']};
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

export const StyledTextDescription = styled.div`
  padding: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme['gray-600']};

  p{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: black;
    margin-bottom: 5px;
  }
`

export const StyledFormAddToCart = styled.div`
  display: flex;
  padding: 5px;
  margin-top: 1.5rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  p{
    font-family: 'Baloo 2';
    font-size: 24px;
    font-weight: 800;
  }

  input{
    width: 72px;
    height: 38px;
    background: #E6E5E5;
  }
`