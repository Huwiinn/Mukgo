import React from "react";
import styled from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = props.price;

  return (
    <li className={styled.meal}>
      <div>
        <h2 className={styled.title}>{props.name}</h2>
        <p className={styled.description}>{props.description}</p>
        <p className={styled.price}>{price}원</p>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
