import React from "react";
import ev from "./../assets/ev.jpg";
import e1 from "./../assets/e1.jpg";
import e2 from "./../assets/e2.jpg";
import e3 from "./../assets/e3.jpg";
import e4 from "./../assets/e4.jpg";
import e5 from "./../assets/e5.jpg";
import eh from "./../assets/eh.jpg";

const items = [
  { src: ev, alt: "ev" },
  { src: e1, alt: "e1" },
  { src: e2, alt: "e2" },
  { src: e3, alt: "e3" },
  { src: e4, alt: "e4" },
  { src: e5, alt: "e5" },
  { src: eh, alt: "eh" },
];
export const Exhibitions = () => {
  return (
    <div className="container exhibitions__container" id="exhibitions">
      <h2 className="exhibitions__title">Exhibitions</h2>
      <div className="empty exhibitions__empty"></div>
      <div className="exhibitions__head">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          laudantium enim perspiciatis unde similique, ducimus quod vel culpa,
          recusandae id assumenda nesciunt. Quisquam quibusdam itaque ut numquam
          harum illum. Perferendis?
        </p>
        <a href="mailto:contact@gmail.com" className="contact__btn about__btn">
          <i className="uil uil-arrow-up-right"></i>
          <p>CONTACT - SEND ME AN EMAIL</p>
        </a>
      </div>
      <div className="exhibitions__gallery">
        {items.map((e) => (
          <article>
            <img src={e.src} alt={e.alt} />
          </article>
        ))}
      </div>
    </div>
  );
};
