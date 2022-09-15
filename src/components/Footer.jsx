import React from "react";
import "./styles/Footer.css";
export const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__main">
        <p>Questions? Contact Us.</p>
        <div className="footer__links">
          <div className="col col1">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="col col2">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notice</a>
          </div>
          <div className="col col3">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div className="col col4">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="col col5">
            <a href="#">Netflix Pakistan</a>
          </div>
        </div>
      </div>
    </div>
  );
};
