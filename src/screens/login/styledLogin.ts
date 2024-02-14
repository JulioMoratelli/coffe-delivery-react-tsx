import styled from "styled-components";


export const AlignDivCenter = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 2rem;
`

export const AllDivs = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

  h1{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    width: 100%;
    color: #0079FF;
  }
`

export const DivAllForm = styled.div`
  display: flex;
  //align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 700px;

  padding: 2rem;
  padding-top: 0rem;

  border-radius: 10px;
`

export const DivButtonAcces = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100px;
  flex-wrap: wrap;

  div{
    width: 35%;
    height: 42%;
    display: flex;   
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;


    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: transparent;
    background-color: #CBE4FF;
  }

  button{
    flex-wrap: wrap;
    width: 50%;
    height: 100%;
    background-color: transparent;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    border: transparent;
    color: #0079FF;
    cursor: pointer;
  
    &:focus{
      color: #CBE4FF;
      background-color: #0079FF;
    }
  }
`

export const ButtonAccess = styled.div`
  max-width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;

  button{
    width: 50%;
    height: 100%;
    
    border: transparent;
    background-color: #0079FF;
    color: #eeeded;
    border-radius: 8px;
    transition: all 0.3s;

    :hover{
      background-color: #03438a;
    }
}
`


