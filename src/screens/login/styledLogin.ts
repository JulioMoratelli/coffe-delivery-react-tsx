import styled from "styled-components";


export const AlignDivCenter = styled.div`
  margin-top: 3rem;
`

export const AllDivs = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: auto;
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

export const DivButtonSelect = styled.div`

`;

export const DivAllForm = styled.div`
  display: flex;
  //align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 700px;

  padding: 2rem;
  border-radius: 10px;
`

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
`


