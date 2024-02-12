import styled from "styled-components";

export const AllDivSuccess = styled.div`
  max-width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: 3rem;
justify-content: space-between;
`


export const DivStyleContext = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`


export const TextConfirmed = styled.div`
  margin-bottom: 2.5rem;

  h1{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;

    color: #C47F17;
  }

  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }
`

export const StyledStatusDelivery = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`


export const GradientStyledA = styled.div`
  background-image: linear-gradient(to right, #DBAC2C, #8047F8);
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: start;
  padding: 1px;
`


export const StatusDelivery = styled.div` 
  border: 2px solid transparent;
  border-bottom-left-radius: 35.5px;
  border-top-right-radius: 35.5px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;

  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: #FAFAFA;
  padding: 2.5rem;

  span{
    display: flex;
    flex-wrap: wrap;
    color: var(--Base-Text, #574F4D);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  div {
    display: flex; 
    margin-bottom: 20px;
    gap: 1rem;
  }

  div:last-child{
    margin-bottom: 0px;
  }
`

export const DivIconsSvg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8047F8;
    border-radius: 100px;
    min-width: 36px;
    min-height: 36px;
    color: white;

    svg{
      width: 20px;
      height: 20px;
    }
`

