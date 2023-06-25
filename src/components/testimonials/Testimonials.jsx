import React from "react";
import "./testimonials.scss";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import testimonialsData from "./constants";
import Reveal from "../shared/Reveal/Reveal";
import RevealWithDelay from "../shared/RevealWithDelay/RevealWithDelay";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <SectionTitle>
        <Reveal>
          <span>Review from clients</span>
        </Reveal>
        <br />
        <Reveal>
          <div>Testimonials</div>
        </Reveal>
      </SectionTitle>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
      >
        {testimonialsData.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide key={name} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={`${name} avatar`} loading="lazy" />
              </div>
              <RevealWithDelay width="100%">
                <h3 className="client__name">{name}</h3>
              </RevealWithDelay>
              <RevealWithDelay>
                <small className="client__review">{review}</small>
              </RevealWithDelay>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
