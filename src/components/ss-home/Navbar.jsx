import React from "react";
import { img } from "../Script";
import content from "./Content";

//variable
const contentEN = content.en_EN;
// const contentID = content.id_ID;

function NavHome() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img
          src={img(contentEN.navbar.logo.img)}
          alt={contentEN.navbar.logo.name}
        />
        <h1>{contentEN.navbar.logo.name}</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <a href="#solution">{contentEN.navbar.menu.solution}</a>
        </li>
        <li>
          <a href="#product">{contentEN.navbar.menu.product}</a>
        </li>
        <li>
          <a href="#project">{contentEN.navbar.menu.project}</a>
        </li>
        <li>
          <a href="#teams">{contentEN.navbar.menu.teams}</a>
        </li>
        <li>
          <a href="#contact">{contentEN.navbar.menu.contact}</a>
        </li>
      </ul>
    </div>
  );
}

function NavDocs() {
  return (
    <div className="nav-container nav-docs">
      <div className="nav-logo nav-logo-docs">
        <img
          src={img(contentEN.navbar.logo.img)}
          alt={contentEN.navbar.logo.name}
        />
        <h1>{contentEN.navbar.logo.name}</h1>
      </div>
      <input list="Solution" />
      <datalist id="Solution">
        <option value="Test 1">Test1</option>
        <option value="Test 1">Test2</option>
        <option value="Test 1">Test3</option>
      </datalist>
      <ul className="nav-menu">
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </div>
  );
}
export { NavHome, NavDocs };
