import React from "react";
import Modal from "../UI/Modal/Modal";
import styled from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    // 클래스 이름을 배열 형태로 사용하기 위해 { [] }를 사용.
    <ul className={styled["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 9900 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={styled.total}>
        <span>Total Amount</span>
        <span>332.34</span>
      </div>
      <div className={styled.actions}>
        <button className={styled["button--alt"]}>Close</button>
        <button className={styled.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
