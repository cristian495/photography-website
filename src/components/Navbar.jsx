import React, { useEffect, useState } from "react";
import NavLogo from "./../assets/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      document
        .querySelector("nav")
        .classList.toggle("window-scrolled", window.scrollY > 0);
    });
    const nav = document.querySelector(".nav__links");
    nav.querySelectorAll("li a").forEach((navLink) => {
      navLink.addEventListener("click", closeNav);
    });
  }, []);

  const openNav = () => {
    const nav = document.querySelector(".nav__links");
    const openBtn = document.querySelector("#nav__toggle-open");
    const closeBtn = document.querySelector("#nav__toggle-close");
    nav.style.display = "flex";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
  };
  const closeNav = () => {
    const nav = document.querySelector(".nav__links");
    const openBtn = document.querySelector("#nav__toggle-open");
    const closeBtn = document.querySelector("#nav__toggle-close");
    nav.style.display = "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="home" spy={true} smooth={true}>
          <img src={NavLogo} className="nav__logo" alt="Nav Logo" />
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="home" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>
          <li>
            <Link to="gallery" spy={true} smooth={true}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="exhibitions" spy={true} smooth={true}>
              Exhibitions
            </Link>
          </li>
        </ul>
        <ul className="nav__socials">
          <li>
            <Link href="https://instagram.com" target="_blank">
              <i className="uil uil-instagram-alt"></i>
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com" target="_blank">
              <i className="uil uil-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com" target="_blank">
              <i className="uil uil-youtube"></i>
            </Link>
          </li>
        </ul>
        <button
          className="nav__toggle-btn"
          id="nav__toggle-open"
          onClick={openNav}
        >
          <i className="uil uil-bars"></i>
        </button>
        <button
          className="nav__toggle-btn"
          id="nav__toggle-close"
          onClick={closeNav}
        >
          <i className="uil uil-multiply"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
