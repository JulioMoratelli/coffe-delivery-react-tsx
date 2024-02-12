import styled from "styled-components";

export const DeliveryAlignCenter = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`

export const StyledAllCheckout = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;

  p {
    font-family: "Baloo 2";
    font-style: normal;
    font-size: 18px;
    color: #403937;
  }
`;

export const DeliveryAddress = styled.div`
  width: 640px;
  height: 691px;
`;

export const DivFormAddress = styled.div`
  display: flex;
  width: 640px;
  flex-wrap: wrap;
  border-radius: 6px;
  margin-top: 1.7rem;

  background: #f3f2f2;

  svg {
    margin-right: 10px;
    color: #c47f17;
    height: 24;
  }


  form {
    width: 560px;
  }
`;

export const FormStyledInput = styled.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;

  div {
    display: flex;
    gap: 12px;
  }

  input {
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    height: 42px;
    padding: 1rem;

    background: #eeeded;

    cursor: pointer;

    ::placeholder {
      color: #8d8686;
    }

    &:focus {
      color: #20252e;
      outline: 1px solid #8d8686;
    }
  }

  
`;

export const Payment = styled.div`
  display: flex;
  margin-top: 2.5rem;
  width: 640px;
  background: #f3f2f2;
  flex-wrap: wrap;
  border-radius: 6px;

  svg {
    margin-right: 8px;
    color: #8047f8;
    margin-top: 1.1rem;
  }

  div {
    display: flex;
    width: 560px;
    height: 51px;
    margin-top: 1rem;
  }
`;

export const TitlePayments = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h3 {
    font-family: "Roboto";
    font-weight: 600;
    font-size: 16px;
    margin-top: 2px;

    color: #403937;
  }

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px;

    color: #574f4d;
  }
`

export const PaymentMethods = styled.div`
  gap: 12px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: transparent;
    width: 178.67px;
    height: 51px;
    font-size: 12px;
    border-radius: 6px;

    background: #e6e5e5;
    text-transform: uppercase;
    svg {
      margin-top: 0;
    }

    &:hover{
      background: #D7D5D5;
      cursor: pointer;
    }
  }
`;

export const AllCoffesSelect = styled.div`
  margin-left: auto;
  
`;

export const PaymentStatus = styled.div`
  //width: 448px;
  height: auto;
  border-radius: 6px 44px;
  margin-top: 2rem;
  //margin-left: 20px;

  background: #f3f2f2;
`;

export const BagProducts = styled.div`
  width: 370px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #574f4d;
  }

  div {
    display: flex;

    img {
      width: 64px;
      height: 64px;
      margin-right: 20px;
    }
  }

  &::after{
    content: '';
    width: 368px;
    height: 0px;
    border-bottom: 1px solid #E6E5E5;
    margin: 24px 0px 24px 0px;
  }
`;

export const PurchaseInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 171px;
  height: 61px;

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #403937;
  }

  div {
    width: 72px;
    height: 32px;
    background: #e6e5e5;
    justify-content: space-between;
    border-radius: 6px;
    margin-right: 8px;
    align-items: center;
    padding: 8px;

    button {
      margin-top: 5px;
      border: transparent;
      background-color: transparent;
      color: #8047f8;

      :hover {
        color: #4B2995;
        cursor: pointer;
      }
    }
  }
`;

export const ButtonDelet = styled.button`
  width: 91px;
  height: 32px;
  padding: 8px;
  display: flex;
  justify-content: space-between;

  background: #E6E5E5;
  border: transparent;
  border-radius: 6px;
  
  p{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
  }

  svg{
    color: #8047f8;
  }

  &:hover {
    background: #D7D5D5;
    color: #4B2995;
    cursor: pointer;
  }
`;


export const AccountTotal = styled.div`
  display: flex ;
  width: 368px;
  height: 92px;  
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 24px;
  margin-bottom: 24px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #574F4D;

  div{
    display: flex;
    justify-content: space-between;
    width: 368px;
    height: 21px;
  }

  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #574F4D;
  }
`

export const ConfirmOrder = styled.button`
  width: 368px;
  height: 46px;

  background: #DBAC2C;
  border-radius: 6px;
  border: transparent;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: #FFFFFF;

  :hover{
    background-color: #C47F17;
    cursor: pointer;
  }
`
