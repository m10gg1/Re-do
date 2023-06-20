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
        rating={dish.rating}
        Timeframe={dish.TimeFrame}
        distance={dish.distance}
      />
    );
  });

  return <section className="card-list">{foods}</section>;
};

export default Food;
