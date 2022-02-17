import React from "react";

//Components
import Navbar from "./Navbar";
import Solution from "./Solution";
import Product from "./Product";

function Home() {
  return (
    <div>
      <Navbar />
      <Solution />
      <Product />
      {/* <Project />
      <Teams />
      <Contact /> */}
    </div>
  );
}

export default Home;
