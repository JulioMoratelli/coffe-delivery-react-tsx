import styled from "styled-components";


export const StyledGlobalStore = styled.div`
  padding: 0rem 10rem 0rem 10rem;
  

  article{
    display: flex;
    margin-top: 0.5rem;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;
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
    padding: 4px 0px;
    border-radius: 100px;
    text-transform: uppercase;

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

  div{
    display: flex;
    width: 72px;
    height: 38px;
    margin-right: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    background: #E6E5E5;
    
    padding: 5px;

    p{
      font-family: 'Roboto';
      font-size: 16px;
      margin: 0;
      font-weight: 400;
    }

    button{
      display: flex;
      border: transparent;
      background-color: transparent;
      color: #8047F8;
      align-items: center;
      cursor: pointer;
    }
  }
`

export const ButtonShoppingCart = styled.button`
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;

    background: #4B2995;
    color: #F3F2F2;
    border-radius: 6px;
    border: transparent; 
    cursor: pointer;

    img{
      margin-left: 8px;
    }
    
    :hover{
      background-color: #8047F8;
    }
`