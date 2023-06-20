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
        Price={spa.price}
      />
    );
  });

  return <section className="dishes">{care}</section>;
};

export default Spa;
