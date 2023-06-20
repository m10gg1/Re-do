import React from "react";
import RData from "../RData";
import RoomCard from "../Components/RoomCard";

const Room = () => {
  const cards = RData.map((item) => {
    return (
      <RoomCard
        key={item.id}
        img={item.coverImg}
        location={item.title}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        Owner={item.Owner}
        TimeFrame={item.TimeFrame}
        Price={item.price}
        details={item.description}
      />
    );
  });

  return <section className="card-list">{cards}</section>;
};

export default Room;
