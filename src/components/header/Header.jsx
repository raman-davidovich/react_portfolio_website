import React, { useEffect, useContext } from "react";
import "./header.scss";
import CTA from "./CTA";
import ME from "../../assets/me.webp";
import HeaderSocials from "./HeaderSocials";
import { useInView } from "react-intersection-observer";
import { InViewIDContext } from "../../context/InViewIDContext";
import Reveal from "../shared/Reveal/Reveal";

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
        <div className="header__title">
          <Reveal>
            <h5>Hello I'm</h5>
          </Reveal>
          <Reveal>
            <h1>Raman Davidovich</h1>
          </Reveal>
          <Reveal>
            <h2 className="text-light">Frontend Developer</h2>
          </Reveal>
        </div>

        <CTA />
        <HeaderSocials />

        <div className="header__photo">
          <Reveal>
            <div className="me">
              <img src={ME} alt="Smilling Raman" loading="eager" />
            </div>
          </Reveal>
        </div>

        <div className="scroll__down">
          <Reveal>
            <a href="#contacts">Scroll Down</a>
          </Reveal>
        </div>
      </div>
    </header>
  );
};

export default Header;
