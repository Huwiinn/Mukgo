import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styled from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(0);

  return (
    <form className={styled.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
