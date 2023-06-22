import React from "react";
import styled from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <>
      <div className={styled.container}>
        <div className={styled.inner}>
          <h3 className={styled.title}>
            신선한 식재료와 맛있는 밀키트를 제공합니다.
          </h3>
          <p>
            좋은 재료로 만든 음식을 제공한다는 것은, 건강을 챙긴다는 것과
            같습니다.
            <br />
            우리 가족의 입으로 들어가는 것이라 생각하고 좋은 것들만
            엄선하였습니다.
          </p>
          <p>
            바쁜 현대인들을 위한 간편 식사와 밀키트 제공.
            <br />
            아무거나 먹지 마세요. 우리가 당신의 건강을 책임질게요.
          </p>
        </div>
      </div>
    </>
  );
};

export default MealSummary;
