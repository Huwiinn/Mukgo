import React from "react";
import { styled } from "styled-components";
import { v4 } from "uuid";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: v4(),
    name: "스시",
    description: "새벽에 공수해오는 생선들로 만든 스시 8 pieces",
    price: 9900,
  },
  {
    id: v4(),
    name: "새싹 비빔밥",
    description: "직접 운영하는 밭에서 가꾼 새싹 채소들로 만든 비빔밥",
    price: 7900,
  },
  {
    id: v4(),
    name: "불고기 정식",
    description:
      "당일 도축한 돼지 불고기. 전자레인지에 돌려서 한 끼 간편하고 든든하게! ",
    price: 6500,
  },
  {
    id: v4(),
    name: "치즈버거",
    description: "아침에 커피 한 잔과 잘 어울리는 리코타 치즈버거",
    price: 3900,
  },
];

const AvailableMeals = () => {
  // 배열 데이터를 가져와서 맵핑 후, 데이터 출력
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styled.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
