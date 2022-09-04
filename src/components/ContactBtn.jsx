import React, { useEffect } from "react";

const ContactBtn = ({ filled, className }) => {
  return (
    <a
      href="mailto:contact@gmail.com"
      className={`${
        filled ? "btn_background" : ""
      } contact__btn header__btn ${className} `}
    >
      <i className="uil uil-arrow-up-right"></i>
      <p>CONTACT - SEND ME AN EMAIL</p>
    </a>
  );
};

export default ContactBtn;
