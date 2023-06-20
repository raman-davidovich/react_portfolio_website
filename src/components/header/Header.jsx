import React, { useEffect, useContext } from "react";
import "./header.scss";
import CTA from "./CTA";
import ME from "../../assets/me.webp";
import HeaderSocials from "./HeaderSocials";
import { useInView } from "react-intersection-observer";
import { InViewIDContext } from "../../context/InViewIDContext";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const { changeInViewID } = useContext(InViewIDContext);

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (inView) {
      changeInViewID("#");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <header ref={ref}>
      <div className="container header__container">
        <Fade delay={500} direction="down" cascade triggerOnce>
          <h5>Hello I'm</h5>
          <h1>Raman Davidovich</h1>
          <h2 className="text-light">Frontend Developer</h2>
        </Fade>
        <CTA />
        <HeaderSocials />
        <Fade delay={3000} direction="up" triggerOnce>
          <div className="me">
            <img src={ME} alt="Smilling Raman" loading="eager" />
          </div>
        </Fade>

        <Fade
          delay={4000}
          direction="down"
          triggerOnce
          className="scroll__down"
        >
          <a href="#contacts">Scroll Down</a>
        </Fade>
      </div>
    </header>
  );
};

export default Header;
