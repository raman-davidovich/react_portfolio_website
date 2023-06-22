import React, { useContext, useEffect } from "react";
import "./about.scss";
import ME from "../../assets/me-about.webp";
import cardsInfo from "./constants";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { useInView } from "react-intersection-observer";
import { InViewIDContext } from "../../context/InViewIDContext";
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
        <span>Get To Know</span>
        <br />
        <div>About Me</div>
      </SectionTitle>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Serious Raman" loading="lazy" />
          </div>
        </div>
        <div className="about__content">
          <ul className="about__cards">
            {cardsInfo.map(({ icon, title, information }) => {
              return (
                <li key={title} className="about__card">
                  {icon}
                  <h3>{title}</h3>
                  <small>{information}</small>
                </li>
              );
            })}
          </ul>

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
        </div>
      </div>
    </section>
  );
};

export default About;
