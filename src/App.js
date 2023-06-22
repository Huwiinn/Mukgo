import * as React from "react";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Rubik', 'Noto Sans KR' , sans-serif;
    }

    li {
      list-style : none;
    }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
