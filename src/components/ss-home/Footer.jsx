import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <h5>Copyrigth &copy; | {year} - PT Transformasi Data Indonesia</h5>
      </div>
    </footer>
  );
}

export default Footer;
