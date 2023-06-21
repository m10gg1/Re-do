import React from "react";
import star from "../images/starzy.jpg";

const RoomCard = (props) => {
  return (
    <>
      <div className="cards col-md-3 col-6">
        <div className="img-container">
          <img src={`../${props.img}`} className="card--imag" alt="pics" />
        </div>
        <div className="card--stats">
          <div className="d-flex justify-content-between">
            <div>
              <span className="bold">{props.location}</span>
            </div>
            <div>
              <img src={star} alt="uuu" className="starry" />
              <span>{props.rating}</span>
            </div>
          </div>
          <h6 className="gray"> {props.details}</h6>
          <h6 className="gray">{props.TimeFrame}</h6>
          <span className="bold">${props.Price}</span> night
        </div>
      </div>
    </>
  );
};
export default RoomCard;
