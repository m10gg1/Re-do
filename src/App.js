import React from "react";
import Nav from "./Components/Nav";
// import Navbar from "./Components/Navbar";
import Tabs from "./Components/Tabs";
import "./App.css";
import Room from "./Pages/Room";
import Food from "./Pages/Food";
import Spa from "./Pages/Spa";
// import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Nav />
      {/* <Navbar /> */}
      <Tabs />

      <Routes>
        <Route path="/Rooms" element={<Room />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Spa" element={<Spa />} />
      </Routes>

      {/* <Hero/> */}

      {/* <Slider/> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
