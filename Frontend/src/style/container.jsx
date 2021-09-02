import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.bg};
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCard = styled.div`
  border-radius: 10px;
  width: 600px;
  padding: 20px;
  height: 400px;
  background: ${(props) => props.theme.cardBg};
  box-shadow: ${(props) => props.theme.boxShadow};
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 575.98px) {
    width: 100%;
    height: 100vh;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 80%;
  }
`;
// use this background glass
// background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
