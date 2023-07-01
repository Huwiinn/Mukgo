// 해당 컴포넌트의 목표는 CartContext 데이터를 관리하고,
// 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 것임.
// 여기서 장바구니 데이터를 관리한다.

import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // 장바구니 추가 로직
  if (action.type === "ADD_CART_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // updatedItems을 꺼내기 전에 먼저 항목이 이미 장바구니에 들어있는지 확인하는 상수
    // findIndex()는 배열에서 항목의 인덱스를 찾아준다.
    // 해당 코드는 현재 배열에서 보고있는 항목이 전달된 액션으로 추가하는 항목과 일치할 때 인덱스값을 반환한다.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // concat()은 JS 내장함수다. push와 달리 기존 배열을 편집하지 않고 새 배열을 반환한다.
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }

  // 장바구니 삭제 로직
  if (action.type === "REMOVE_CART_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    console.log("state : ", state);
    console.log("existingItem : ", existingItem);
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  // useReducer는 정확히 두 개의 요소로 된 배열을 반환한다.
  // 배열 디스트럭처링
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // console.log("====================================");
  // console.log(cartState);
  // console.log("====================================");
  // console.log(dispatchCartAction);

  const addItemCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_CART_ITEM",
      item: item,
    });
  };
  const removeItemCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_CART_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
