import React from "react";
import star from "../images/starzy.jpg";
const FoodCard = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card--stats">
          <img src={props.img} className="card--imag" alt="aaa" />
          <span className="bold">{props.Name}</span>
          <img src={star} alt="wouuu" className="starry" />
          <span>{props.rating}</span>
          <h6 className="gray">{props.distance}</h6>
          <h6 className="gray">{props.TimeFrame}</h6>
          <span className="bold">${props.Price}</span> night
        </div>
      </div>
    </>
  );
};

export default FoodCard;
