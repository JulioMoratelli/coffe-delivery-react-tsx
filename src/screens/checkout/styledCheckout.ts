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
  border-radius: 6px;
  width: 640px;
  height: 591px;
`

export const DivFormAddress = styled.div`
  display: flex;
  width: 640px;
  height: 372px; 
  padding: 2.5rem;
  flex-wrap: wrap;
  background: #F3F2F2;

  svg{
    margin-right: 10px;
    color: #C47F17;
    height: 24;
  }

  h3{
    height: 0rem;
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