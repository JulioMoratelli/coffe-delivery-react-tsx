import styled from "styled-components";


export const AllDivSuccess = styled.div`
  padding: 5rem 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
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
`

export const StatusDelivery = styled.div` 
  border: 2px solid transparent;
  border-bottom-left-radius: 35.5px;
  border-top-right-radius: 35.5px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: #FAFAFA;
  padding: 2.5rem;
`

export const GradientStyledA = styled.div`
  background-image: linear-gradient(to right, #DBAC2C, #8047F8);
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1px;
  

  div{
    
    gap: 2px;
  }

  svg{
    padding: 4px;
    background-color: purple;
    border-radius: 100px;
    color: white;
  }

  span{
    display: flex;
    flex-wrap: wrap;
  }
`

