import React from "react";
import styled from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styled.input}>
      <label htmlFor={props.label} id={props.input.id}>
        {props.label}
      </label>
      {/* input 요소를 전개구문으로 모두 불러와서 적용 */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
