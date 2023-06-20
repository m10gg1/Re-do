import React from "react";
import FData from "../FData";
import FoodCard from "../Components/FoodCard";

const Food = () => {
  const foods = FData.map((dish) => {
    return (
      <FoodCard
        key={dish.id}
        img={dish.img}
        Name={dish.name}
        Price={dish.price}
      />
    );
  });

  return <section className="dishes">{foods}</section>;
};

export default Food;
