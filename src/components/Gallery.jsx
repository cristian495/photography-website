import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import Gallery1 from "./../assets/gallery1.jpg";
import Gallery2 from "./../assets/gallery2.jpg";
import Gallery3 from "./../assets/gallery3.jpg";
import Gallery4 from "./../assets/gallery4.jpg";
import Gallery5 from "./../assets/gallery5.jpg";
import Gallery6 from "./../assets/gallery6.jpg";
import Gallery7 from "./../assets/gallery7.jpg";
import Gallery8 from "./../assets/gallery8.jpg";
import Gallery9 from "./../assets/gallery9.jpg";
import Gallery10 from "./../assets/gallery10.jpg";
import Gallery11 from "./../assets/gallery11.jpg";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="container gallery__container">
        <div className="gallery__head">
          <h2 className="gallery__title">My Gallery</h2>
          <div className="empty gallery__empty"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          expedita velit veniam quaerat. Eligendi, quisquam mollitia velit
          minima nesciunt eveniet fuga sint doloremque inventore architecto
          molestias, ab consequatur necessitatibus aliquid.
        </p>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            599: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1023: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={Gallery1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery11} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
