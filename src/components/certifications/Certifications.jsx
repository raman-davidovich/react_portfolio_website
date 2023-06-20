import React from "react";
import "./certifications.scss";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import certificatsInfo from "./constants";
import { getSlidesPerView, getModules, getSpaceBetween } from "./utils";
import { Fade } from "react-awesome-reveal";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import Window size hook
import useWindowSize from "@rooks/use-window-size";

const Certifications = () => {
  const { innerWidth } = useWindowSize();
  const slidesPerView = getSlidesPerView(innerWidth);
  const modules = getModules(innerWidth);
  const spaceBetween = getSpaceBetween(innerWidth);
  return (
    <section id="certifications">
      <SectionTitle>
        <Fade delay={500} direction="down" cascade triggerOnce damping={0.3}>
          <span>Knowledge confirmation</span>
          <br />
          <div>Licences & certifications</div>
        </Fade>
      </SectionTitle>

      <Fade delay={1500} direction="up" triggerOnce>
        <Swiper
          className="container certifications__container"
          //install Swiper modules
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            slideShadows: false,
          }}
          modules={modules}
          spaceBetween={spaceBetween}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 30000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
        >
          {certificatsInfo.map(({ picture, title, skills }) => {
            return (
              <SwiperSlide key={picture} className="certificat">
                <div className="certificat__picture">
                  <img
                    src={picture}
                    alt={`${title} certificate`}
                    loading="lazy"
                  />
                </div>
                <h3 className="certificat__title">{title}</h3>
                <small className="certificat__skills">Skills: {skills}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Fade>
    </section>
  );
};

export default Certifications;
