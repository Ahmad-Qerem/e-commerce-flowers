import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerWrapper">
        <div className="inputAndButton">
          <input type="email" placeholder="Example@example.com" />
          <button>Join </button>
        </div>
        <div className="contactUs">
          <h2>Contact Us</h2>
          <p>
            255 Springs Rd. Apt 625, <br /> Limassol, Cyprus{" "}
          </p>
        </div>
        <div className="socialIcons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
