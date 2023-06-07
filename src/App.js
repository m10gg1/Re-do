import React from "react"
import Navbar from "./Components/Navbar";


import Tabs from "./Components/Tabs";
import './App.css';
import Room from "./Pages/Room";
import Food from "./Pages/Food";

import Spa from "./Pages/Spa";
import {Routes, Route} from 'react-router-dom'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RData from "./RData";
import FData from "./FData";
import SData from "./SData";


function App() {
  const cards = RData.map(item => {
    return (
      <Room 
      key={item.id}
      img={item.coverImg}
      location={item.title}
      rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      Owner={item.Owner}
      TimeFrame={item.TimeFrame}
      Price={item.price}
      
      
      />)
    })

    const foods=FData.map(dish=>{
      return(
        <Food
          key={dish.id}
          img={dish.img}
          Name={dish.name}
          Price={dish.price}
          
        />
      )
    })

    const care=SData.map(spa=>{
      return(
        <Spa
        key={spa.id}
        img={spa.Img}
        service={spa.service}
        Price={spa.price}
        />
      )
    })

    
    
  
    return (
   <>
    <Navbar/>
    <Tabs/>
   
  
  
    
   <Routes>
  <Route path="/Room" element={<Room />}/>
  
  <Route path="/Food" element={<Food />}/>
  <Route path="/Spa" element={<Spa />} />


  </Routes>

   <>
     <section className="cards-list">{cards}</section>
 
   </> 

  

 <>
   <section className="dishes">{foods}</section>

       
 </>

 
 <>
   <section className="dishes">{care}</section>

       
 </>

 

{/* <Hero/> */}
   </>
  );
}

export default App;
