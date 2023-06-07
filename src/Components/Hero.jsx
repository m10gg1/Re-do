import React from "react"
import grid from '../images/Blackgrid.jpeg'
import blue from '../images/Blue grid.jpeg'
import house from '../images/house.jpg'
import buffet from '../images/Buffet.jpg'
import spa from '../images/Spa.jpg'


export default function Hero(){
    return(
        <>
        <section className="hero">
          
          <img src={house} alt="beach" className="img"/>
          
                  
          <img src={buffet} alt="beach" className="img"/>
          <img src={spa} alt="spaaa" className="img"/>

         
          <h3 className="hero--header">Experience the best🛎</h3>
          <p className="hero--text">Enjoy the Unique experience by our unique service,
          one-of-a-kind hosts,<strong> 24/7</strong> customer services at your footstep.</p>
          <img src={grid}  alt="black-one" className="hero--photo" />
          <img src={blue} alt="blue-one"  className="blue-one"/>
   
      </section>
        </>
    )
}