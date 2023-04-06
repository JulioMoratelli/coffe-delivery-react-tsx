import styled from "styled-components";


export const StyledAllCheckout = styled.div`
  padding: 5rem 10rem 0rem 10rem;
  align-items: center;

  
  p{
    font-family: 'Baloo 2';
    font-style: normal;
    font-size: 18px;
    color: #403937;
  }
`

export const DeliveryAddress = styled.div`
  width: 640px;
  height: 591px;
`

export const DivFormAddress = styled.div`
  display: flex;
  width: 640px;
  height: 372px; 
  padding: 2.5rem;
  flex-wrap: wrap;
  border-radius: 6px;
  margin-top: 2rem;

  background: #F3F2F2;

  svg{
    margin-right: 10px;
    color: #C47F17;
    height: 24;
  }

  h3{
    height: 0rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: #403937;
  }

  p{
    font-family: 'Roboto';
    font-size: 14px;
    width: 530px;
    padding-left: 35px;
    height: 0rem;

    color: #574F4D;
  }

  form{
    width: 560px;
    height: 216px;
    margin-top: 3rem;
  }
`

export const FormStyledInput = styled.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  div{
    display: flex;
    gap: 12px;
  }
  
  input {
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    height: 42px;
    padding: 1rem;

    background: #EEEDED;
    
    ::placeholder{
      color: #8D8686;
    }
  }

  :hover input {
    color: #574F4D;
  }
`

export const Payment = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 640px;
  height: 207px;
  background: #F3F2F2;
  padding: 2.5rem;

  svg{
    width: 24px;
    height: 24px;
  }

  h3{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 200px;

    color: #403937;
  }

`

