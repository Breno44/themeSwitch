import React from "react";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <div>
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
