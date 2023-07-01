import React from "react";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../Modal/Modal";
import styled from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount}원`;

  // 장바구니에 항목이 하나라도 있을 때를 확인하는 상수변수
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    // 클래스 이름을 배열 형태로 사용하기 위해 { [] }를 사용.
    <ul className={styled["cart-items"]}>
      {cartCtx.items.map((item) => (
        // <li>{item.name}</li>
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          // .bind()는 새로운 함수를 반환한다.
          // 원하는 인자를 전달할 수 있다. 인자로 .bind(thisArg, [arg1, arg2, ...])
          // thisArg - this가 가리킬 객체를 지정 | [arg1, arg2, ...] - 함수의 인자로 전달할 값
          // 첫 번째 인자인 thisArg는 선택옵션으로 값을 전달하지 않아도 되며, null 등을 사용할 수 있음.
          // 요약 :  bind는 향후 실행을 위해 함수를 사전에 구성한다. 기본적으로 인수를 미리 구성할 수 있다(함수가 실행될 때 받을 인수를).
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styled.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styled.actions}>
        <button className={styled["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styled.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
