import React from "react";

const Spa = (props) => {
    return ( 
        <>
      <div className="Continer">
       <div className="cards">
       
        <a href="#"><img src={`../${props.img}`} className="card--imag" alt="pics" /></a>
        <p> Service: {props.service}</p>
        <p className="card--price"><span className="bold">From:${props.Price}</span>/service</p>

       </div>
       </div>
        </>
       
     );
}
 
export default Spa;