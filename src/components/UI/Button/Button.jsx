import React, { useEffect } from "react";
import styled from "./Button.module.css";
import cart from "../../../assets/icon/cart.png";
import { useState } from "react";
// 동적으로 Button.module.css width값을 변경하여 사용가능한지 알아보고 적용해보기.
//  아마 전역 Context로 state를 관리하여 설정한다면 가능할 수 있을 것 같음.

const Button = (props) => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const btnClasses = `${styled.button} ${isBtnActive ? styled.bump : ""}`;

  const cartCtx = props.cartCtx;
  const { items } = cartCtx;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      // 장바구니 항목이 텅텅 비었을 경우에 실행하지 않도록 바로 return문으로 탈출
      return;
    }
    setIsBtnActive(true);

    const timer = setTimeout(() => {
      setIsBtnActive(false);
    }, 300);

    // 이전 타이머를 지우고 새로운 타이머를 적용시키는 cleanUP func
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <img src={cart} className={styled.cart} />
      <p>{props.title}</p>
      <spa className={styled.count}>{props.numberOfCartItems}</spa>
    </button>
  );
};

export default Button;
