import React from "react";
const Room = (props) => {
    return (  
        <>
    
        <div className="container">
         <div className="card">
            
         <a href="#"><img src={`../${props.img}`} className="card--image" alt="pics" /></a>  
           
            <div className="card--stats">

             <p><span className="bold"> Host:</span> {props.Owner}</p>
            
           

          
            <p className="card--title">{props.location}</p>
            <span className="gray"> FROM: {props.TimeFrame}</span>

            <p className="card--price"><span className="bold">From: ${props.Price}</span> / person</p>
           
            </div>
        </div>
</div>

        </>
    );
}
 
export default Room;