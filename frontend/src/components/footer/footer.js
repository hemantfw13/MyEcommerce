import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="footerInside">
          <div className="send-email">
            <p>Terms And Conditions</p>
            <p>Privacy Policy</p>
            <p> Return Policy</p>
            <p>About</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
