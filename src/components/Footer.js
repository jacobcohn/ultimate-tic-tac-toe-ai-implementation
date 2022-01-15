import React from "react";
import { FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footerText">Created by Jacob Cohn</h1>
      <a href="https://github.com/jacobcohn" target="_blank" rel="noreferrer">
        <FaGithub className="githubIcon" />
      </a>
    </div>
  );
}

export default Footer;
