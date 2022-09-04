import React from "react";
import HeaderImg from "./../assets/header.jpg";
import Frame1 from "./../assets/frame1.jpg";
import Frame2 from "./../assets/frame2.jpg";
import ContactBtn from "./ContactBtn";
const HeroBanner = () => {
  return (
    <>
      <header id="home">
        <div className="container header__container">
          <div className="header__left">
            <div className="header__image-bg"></div>
            <div className="header__image-lg">
              <img src={HeaderImg} alt="header image" />
            </div>
            <div className="header__image-sm">
              <img src={HeaderImg} alt="header image" />
            </div>
          </div>
          <div className="header__right">
            <div className="header__head">
              <div className="empty header__empty"></div>
              <a href="" className="header__tag">
                #Best travel photographer 2022
              </a>
            </div>

            <h1>See the beauty of the world through my lense</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, illum! Nemo, temporibus natus reprehenderit quasi,
              consectetur ea earum cupiditate possimus dignissimos
            </p>

            <a href="mailto:support@gmail.com" className="header__btn-md">
              Let's Talk
            </a>
          </div>
        </div>
      </header>
      <div className="header__frames">
        <div className="header__frame">
          <img src={Frame1} alt="header frame one" />
        </div>
        <div className="header__frame">
          <img src={Frame2} alt="header frame two" />
        </div>
      </div>

      <ContactBtn filled/>
    </>
  );
};

export default HeroBanner;
