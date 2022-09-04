import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import { Exhibitions } from "./components/Exhibitions";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
const App = () => {
  useEffect(() => {
    const textButtons = document.querySelectorAll(".contact__btn");
    textButtons.forEach((textButtons) => {
      let text = textButtons.querySelector("p");

      text.innerHTML = text.innerHTML
        .split("")
        .map((character, index) => {
          let degs = 12;
          let translate = 0;
          if (character === "I" || character === "i") {
            degs = 12.2;
            translate = -2;
          }
          if (
            character === "a" ||
            character === "A" ||
            character === "E" ||
            character === "e"
          ) {
            degs = 12.1;
          }
          return `<span style="transform: rotate(${
            index * degs
          }deg) translateY(${translate}px); ">${character}</span>`;
        })
        .join("");
    });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroBanner />
      <About />
      <Gallery />
      <Exhibitions />
      <Footer />
    </div>
  );
};

export default App;
