import React, { useContext, useEffect } from "react";
import "./about.scss";
import ME from "../../assets/me-about.webp";
import cardsInfo from "./constants";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { useInView } from "react-intersection-observer";
import { InViewIDContext } from "../../context/InViewIDContext";
import { Fade } from "react-awesome-reveal";
import Button from "../shared/Button/Button";
import useWindowSize from "@rooks/use-window-size";
import { getThreshold } from "../shared/utils";

const About = () => {
  const { innerHeight, innerWidth } = useWindowSize();
  const { changeInViewID } = useContext(InViewIDContext);

  const { ref, inView } = useInView({
    threshold: getThreshold(innerHeight, innerWidth),
  });

  useEffect(
    () => changeInViewID(inView ? "about" : ""),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inView]
  );

  return (
    <section id="about" ref={ref}>
      <SectionTitle>
        <Fade delay={500} direction="down" cascade triggerOnce damping={0.3}>
          <span>Get To Know</span>
          <br />
          <div>About Me</div>
        </Fade>
      </SectionTitle>

      <div className="container about__container">
        <Fade delay={1500} direction="left" triggerOnce>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Serious Raman" loading="lazy" />
            </div>
          </div>
        </Fade>
        <div className="about__content">
          <ul className="about__cards">
            <Fade
              delay={2000}
              direction="right"
              cascade
              triggerOnce
              damping={0.5}
            >
              {cardsInfo.map(({ icon, title, information }) => {
                return (
                  <li key={title} className="about__card">
                    {icon}
                    <h3>{title}</h3>
                    <small>{information}</small>
                  </li>
                );
              })}
            </Fade>
          </ul>

          <Fade delay={3500} direction="up" cascade triggerOnce damping={0.4}>
            <p>
              I'm an enthusiastic and detail-oriented Frontend Software Engineer
              seeking an entry-level position to use my skills in coding and
              troubleshooting complex problems. Currently located in Belarus.
              Ready to relocate. I am looking for any type of employment:
              full-time, partial, remote, internship.
            </p>

            <Button tag="a" href="#contacts" primary>
              Let's Talk
            </Button>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
