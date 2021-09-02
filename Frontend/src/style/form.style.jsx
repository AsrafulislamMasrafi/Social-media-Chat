import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 70%;
  outline: none;
  border: none;
  padding: 10px 15px;
  border-radius: 30px;
  background: ${(props) => props.theme.inputBg.bg};
  color: ${(props) => props.theme.inputBg.color};
  font-family: ${(props) => props.theme.inputBg.font};
  margin: 10px;

  @media (max-width: 575.98px) {
    width: 90%;
    margin: 10px;
  }
`;
export const Label = styled.label`
  font-weight: 600;
  font-size: 20px;
  display: flex;
  font-size: 12px;
  width: 70%;
  margin-left: 10px;
  font-family: ${(props) => props.theme.font};
  @media (max-width: 575.98px) {
    width: 90%;
    margin: 10px;
  }
  p {
    margin-left: 15px;
  }
`;
