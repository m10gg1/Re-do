import React from "react";
import Ari from "../images/Airbnb-logo.jpg";

const Nav = () => {
  return (
    <header className="header">
      <img src={Ari} className="header--image" alt="apples" />
      <div className="extra">
        <ul>
          <li>Any week</li>
          <li>Any where</li>
          <li>Add guests</li>
          <i class="fa fa-search" aria-hidden="true"></i>
        </ul>
      </div>
      <p className="header--project">Airbnb your home</p>
      <span className="top">
        {" "}
        <i class="fa-solid fa-xl fa-globe"></i>{" "}
      </span>

      {/* <h2 className="header--title">Header component</h2> */}
      {/* <h4 className="header--project">React Course - Project 3</h4> */}
    </header>
  );
};

export default Nav;
