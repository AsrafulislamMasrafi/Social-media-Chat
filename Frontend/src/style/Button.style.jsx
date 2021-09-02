import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.btn.bg};
  color: ${(props) => props.theme.btn.color};
  font-family: ${(props) => props.theme.btn.font};
  font-weight: bold;
  border: none;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  width: 100px;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 12px;
`;
export const P = styled.p`
  font-family: ${(props) => props.theme.btn.font};
  font-weight: bold;
  margin: 10px;
  text-align: center;
  font-size: 12px;
`;
export const A = styled.a`
  color: ${(props) => props.theme.btn.bg};
  font-weight: bold;
  font-family: ${(props) => props.theme.btn.font};
  cursor: pointer;
`;
