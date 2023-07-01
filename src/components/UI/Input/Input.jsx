import React from "react";
import { useRef } from "react";
import styled from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styled.input}>
      <label htmlFor={props.label} id={props.input.id}>
        {props.label}
      </label>
      {/* input 요소를 전개구문으로 모두 불러와서 적용 */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
