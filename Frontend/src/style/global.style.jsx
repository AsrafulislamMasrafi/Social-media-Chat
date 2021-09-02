import { createGlobalStyle } from "styled-components";
import "./main.style.css";
export const GlobalStyle = createGlobalStyle`
            *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family:"Segoe-Print-Font";
            }
            a, li{
            color: ${(props) => props.theme.color};
            text-decoration: none;
            list-style: none;
            }
            
            body{
                font-family: ${(props) => props.theme.font};
                background: ${(props) => props.theme.bg};
                color: ${(props) => props.theme.color};
            }
`;
