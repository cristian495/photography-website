import React from "react";
import ContactBtn from "./../components/ContactBtn";
import AboutImg from "./../assets/about.jpg";
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <h2 className="about__title">
          About <br /> Tommy Hans{" "}
        </h2>
        {/* <ContactBtn className="about__btn" /> */}
        <a href="mailto:contact@gmail.com" className="contact__btn about__btn">
          <i className="uil uil-arrow-up-right"></i>
          <p>CONTACT - SEND ME AN EMAIL</p>
        </a>
        <div className="about__left">
          <div className="about__image">
            <div className="about__image-bg"></div>
            <div className="about__image-lg">
              <img src={AboutImg} alt="About Diana Ayi" />
            </div>
            <div className="about__image-sm">
              <img src={AboutImg} alt="About Diana Ayi" />
            </div>
          </div>
        </div>
        <div className="about__right">
          <div className="empty about__empty"></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            voluptatibus ipsa dolorum velit. Deleniti repellendus laborum quo
            aperiam quae, nihil ipsam dolores dolor, esse quis obcaecati
            suscipit, id quasi quaerat.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            voluptatibus ipsa dolorum velit. Deleniti repellendus laborum quo
            aperiam quae, nihil ipsam dolores dolor, esse quis obcaecati
            suscipit, id quasi quaerat.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            ipsum magni ratione vero aspernatur, minima ad blanditiis corrupti
            veritatis similique!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
