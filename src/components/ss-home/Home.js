import React from "react";

//Components
import { NavHome } from "./Navbar";
import Solution from "./Solution";
import Product from "./Product";
import Teams from "./Teams";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <NavHome />
      <Solution />
      <hr className="hr-home" />
      <Product />
      <hr className="hr-home" />
      <Teams />
      <hr className="hr-home" />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
