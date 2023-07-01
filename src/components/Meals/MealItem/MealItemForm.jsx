import React, { useRef, useState } from "react";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styled from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // useRef로 생성된 ref에 대해서는 항상 .current.value를 써야한다.
    // refValue.current는 해당 ref에 저장된 input 요소를 가리키기에 끝에 .value를 붙힌다. 반환값은 항상 문자열이다.
    const enteredAmount = amountInputRef.current.value;

    // const enteredAmountNumber = +enteredAmount; 아래 코드와 같음. 문자열을 숫자로 변환
    const enteredAmountNumber = parseInt(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    // console.log("====================================");
    // console.log("props : ", props);
    // console.log("====================================");

    props.onAddToCart(enteredAmountNumber);
  };

  // const cartCtx = useContext(CartContext);

  return (
    <form className={styled.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1~5).</p>}
    </form>
  );
};

export default MealItemForm;
