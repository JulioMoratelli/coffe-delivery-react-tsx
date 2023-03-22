import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: 100rem;
  height: calc(100vh - 10rem);
  margin: 2rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
