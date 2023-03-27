import styled from "styled-components";

export const StyleBanner = styled.article`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  color: ${(props) => props.theme["gray-900"]};

  img {
    width: 35rem;
    height: 35rem;
    padding: 0 0 7rem 0;
  }
`;

export const StyleTitle = styled.p`
  display: flex;
  font-family: "Baloo 2";
  font-size: 48px;
  font-weight: 800;
  width: 600px;
  padding: 2rem 2rem 1rem 0;
`;

export const StyledSubText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  padding: 0 0 2rem 0;
  width: 600px;
  color: ${(props) => props.theme["gray-800"]};
`;


export const GlobalIcons = styled.footer`
  display: flex;

  justify-content: space-between;
  width: 600px;
  gap: 10px;
  flex-wrap: wrap;

  div {
    display: flex;
    padding: 5px;
    gap: 12px;
  }

  svg {
    border-radius: 50%;
    height: 35px;
    width: 35px;
    padding: 7px;
    color: ${(props) => props.theme["white"]};
  }

  p {
    font-family: "Roboto";
    font-weight: 400px;
    font-size: 16px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const StyledIconShopping = styled.div`
  svg {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
export const StyledIconPackag = styled.div`
  svg {
    background-color: ${(props) => props.theme["gray-700"]};
  }
`;
export const StyledIconTimer = styled.div`
  svg {
    background-color: ${(props) => props.theme["yellow"]};
  }
`;
export const StyledIconCoffe = styled.div`
  svg {
    background-color: ${(props) => props.theme["purple"]};
  }
`;
