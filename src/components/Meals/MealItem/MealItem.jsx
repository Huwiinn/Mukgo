import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import styled from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = props.price;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styled.meal}>
      <div>
        <h2 className={styled.title}>{props.name}</h2>
        <p className={styled.description}>{props.description}</p>
        <p className={styled.price}>{price}원</p>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
