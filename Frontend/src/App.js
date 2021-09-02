// import Test from "./test";
import { ThemeProvider } from "styled-components";
import Components from "./components";
import "./icon/css/all.min.css";
import { GlobalStyle } from "./style/global.style";
import { DarkTheme } from "./style/theme";
function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <Components />
      </ThemeProvider>
      {/* <Test /> */}
    </>
  );
}

export default App;
