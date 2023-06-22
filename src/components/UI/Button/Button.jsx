import React from "react";
import styled from "./Button.module.css";
import cart from "../../../assets/icon/cart.png";

// 동적으로 Button.module.css width값을 변경하여 사용가능한지 알아보고 적용해보기.
//  아마 전역 Context로 state를 관리하여 설정한다면 가능할 수 있을 것 같음.

const Button = (props) => {
  return (
    <button className={styled.button}>
      <img src={cart} className={styled.cart} />
      <p>{props.title}</p>
      <spa className={styled.count}>3</spa>
    </button>
  );
};

export default Button;
