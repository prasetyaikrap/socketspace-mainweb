import React from "react";
import {img} from "../Script";

function Navbar(){
  return (
    <div className="nav-container">
      <div className="nav-logo" >
        <img src={img("ssi-color.png")} alt="Socketspace Indonesia" />
        <h1>SocketSpace Indonesia</h1>
      </div>
      <ul className="nav-menu">
        <li><a href="#solution">Solution</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#teams">Teams</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar;