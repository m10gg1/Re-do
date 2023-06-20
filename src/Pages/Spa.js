import React from "react";
import SpaCard from "../Components/SpaCard";
import SData from "../SData";

const Spa = () => {
  const care = SData.map((spa) => {
    return (
      <SpaCard
        key={spa.id}
        img={spa.Img}
        service={spa.service}
        rating={spa.rating}
        Price={spa.price}
      />
    );
  });

  return <section className="card-list">{care}</section>;
};

export default Spa;
