import * as React from "react";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/UI/Cart/Cart.jsx";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Rubik', 'Noto Sans KR' , sans-serif;
    }

    ol,ul,li {
      list-style : none;
    }
`;

function App() {
  const [isCartShow, setIsCartShow] = useState(false);

  const showCartHandler = () => {
    setIsCartShow(true);
  };

  const hideCartHandler = () => {
    setIsCartShow(false);
  };

  return (
    <CartProvider>
      <Reset />
      <GlobalStyle />
      {isCartShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
