import React from "react";

const Food = (props) => {
 
  
    return ( 
        <>
        <div className="Continer">
       <div className="cards">
        <a href="#"> <img src={props.img} className="card--imag"/></a>
        <p> Name: {props.Name}</p>
        <p className="card--price"><span className="bold">From: ${props.Price}</span> /plate</p>

       </div>
       </div>
        </>
     );
}
 
export default Food;
