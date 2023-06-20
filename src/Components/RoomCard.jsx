import React from "react";
import star from "../images/starzy.jpg";

const RoomCard = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card--stats">
          <img src={`../${props.img}`} className="card--imag" alt="pics" />
          <span className="bold">{props.location}</span>
          <img src={star} alt="uuu" className="starry" />
          <span>{props.rating}</span>
          <h6 className="gray"> {props.details}</h6>
          <h6 className="gray">{props.TimeFrame}</h6>
          <span className="bold">${props.Price}</span> night
        </div>
      </div>
    </>
  );
};
export default RoomCard;
