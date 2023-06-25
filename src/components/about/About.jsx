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
import Reveal from "../shared/Reveal/Reveal";

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
        <Reveal>
          <span>Get To Know</span>
        </Reveal>
        <br />
        <Reveal>
          <div>About Me</div>
        </Reveal>
      </SectionTitle>

      <div className="container about__container">
        <Reveal overflow="visible">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Serious Raman" loading="lazy" />
            </div>
          </div>
        </Reveal>
        <div className="about__content">
          <ul className="about__cards">
            {cardsInfo.map(({ icon, title, information }) => {
              return (
                <Reveal key={title} width="100%">
                  <li className="about__card">
                    {icon}
                    <h3>{title}</h3>
                    <small>{information}</small>
                  </li>
                </Reveal>
              );
            })}
          </ul>

          <Reveal>
            <p>
              I'm an enthusiastic and detail-oriented Frontend Software Engineer
              seeking an entry-level position to use my skills in coding and
              troubleshooting complex problems. Currently located in Belarus.
              Ready to relocate. I am looking for any type of employment:
              full-time, partial, remote, internship.
            </p>
          </Reveal>

          <Reveal>
            <Button tag="a" href="#contacts" primary>
              Let's Talk
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
