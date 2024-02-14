import styled from "styled-components";

export const FormStyledInput = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  //margin-top: 1rem;
  justify-content: center;
  margin-bottom: 2rem;

  input {
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    height: 42px;
    padding: 1rem;
    width: 80%;

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