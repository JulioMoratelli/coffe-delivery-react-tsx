import styled from "styled-components";


export const StyledGlobalStore = styled.div`
  margin-top: 2rem;
  padding: 1rem;

  article{
    display: flex;
    margin-top: 0.5rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  p{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
  }
  
`


export const StyledStore = styled.div`
    display: flex ;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 256px;
    height: 310px;
    padding: 1rem;
    border-radius: 6px 36px;
    margin-top: 4rem;

    background-color: #F3F2F2;
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
  justify-content: space-between;
  align-items: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  p{
    font-family: 'Baloo 2';
    font-size: 25px;
    font-weight: 800;
    margin-right: 20px;
    margin-left: 4px;
    color: #574F4D;
  }

  input{
    width: 72px;
    height: 38px;
    background: #E6E5E5;
    margin-right: 10px;

    border: transparent;
    border-radius: 8px;
    text-align: center;
  }

  button{
    width: 38px;
    height: 38px;

    background: #4B2995;
    color: #F3F2F2;
    border-radius: 6px;
    border: transparent; 
    
    :hover{
      background-color: #8047F8;
    }
  }
`