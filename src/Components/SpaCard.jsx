import React from "react";
import star from "../images/starzy.jpg";

const SpaCard = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card--stats">
          <img src={`../${props.img}`} className="card--imag" alt="pics" />
          <div className="info">
            <span className="bold">{props.service}</span>
            <img src={star} alt="wouuu" className="starry" />
            <span>{props.rating}</span>
            <p className="card--price">
              <span className="bold">${props.Price}</span> night
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaCard;
