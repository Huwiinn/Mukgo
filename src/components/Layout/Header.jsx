import React, { useContext } from "react";
import styled from "./Header.module.css";
import mukgoImg from "../../assets/Mukgo.jpg";
import Button from "../UI/Button/Button";
import CartContext from "../store/CartContext.js";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    // CartItem 객체 필드에 amount가 있음. 항목 유형별로 항목 수를 저장할 수 있다.
    return curNumber + item.amount;
  }, 0);

  return (
    <>
      <header className={styled.header}>
        <h1 className={styled.title}>MukGo</h1>
        <Button
          title={"Your Cart"}
          onClick={props.onShowCart}
          cartCtx={cartCtx}
          numberOfCartItems={numberOfCartItems}
        />
      </header>
      <div className={styled.bg_img}>
        <img
          src={mukgoImg}
          className={styled.wrap_bg_img}
          alt="좋은 식재료로 밥 먹고, 행복도 먹고!"
        />
      </div>
    </>
  );
};

export default Header;
