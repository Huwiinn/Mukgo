import React from "react";
import styled from "./Header.module.css";
import mukgoImg from "../../assets/Mukgo.jpg";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
    <>
      <header className={styled.header}>
        <h1 className={styled.title}>MukGo</h1>
        <Button title={"Your Cart"} />
      </header>
      <div className={styled.bg_img}>
        <img
          src={mukgoImg}
          className={styled.wrap_bg_img}
          alt="좋은 식재료로 밥 먹고, 행복도 먹고!"
        />
      </div>
    </>
  );
};

export default Header;
