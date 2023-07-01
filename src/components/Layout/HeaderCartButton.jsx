import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styled from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styled.button} ${styled.bump}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styled.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styled.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
