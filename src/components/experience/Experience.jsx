import React, { useContext, useEffect } from "react";
import "./experience.scss";
import experienceData from "./constants";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { BsPatchCheckFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { InViewIDContext } from "../../context/InViewIDContext";
import { Fade } from "react-awesome-reveal";
import useWindowSize from "@rooks/use-window-size";
import { getThreshold } from "../shared/utils";

const Experience = () => {
  const { innerHeight, innerWidth } = useWindowSize();
  const { changeInViewID } = useContext(InViewIDContext);

  const { ref, inView } = useInView({
    threshold: getThreshold(innerHeight, innerWidth),
  });

  useEffect(
    () => changeInViewID(inView ? "experience" : ""),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inView]
  );

  return (
    <section id="experience" ref={ref}>
      <SectionTitle>
        <Fade delay={500} direction="down" cascade triggerOnce damping={0.3}>
          <span>The Skills I Have</span>
          <br />
          <div>My Experience</div>
        </Fade>
      </SectionTitle>

      <div className="container experience__container">
        <Fade delay={1500} direction="up" cascade triggerOnce damping={0.5}>
          {experienceData.map(({ title, list }) => {
            return (
              <div key={title}>
                <h3>{title}</h3>

                <ul className="experience__content">
                  <Fade
                    delay={2000}
                    direction="up"
                    triggerOnce
                    cascade
                    damping={0.2}
                  >
                    {list.map(({ technology, level }) => {
                      return (
                        <li key={technology} className="experience__details">
                          <BsPatchCheckFill
                            className="experience__details-icon"
                            alt="Styled list item marker"
                          />
                          <div>
                            <h4>{technology}</h4>
                            <small className="text-light">{level}</small>
                          </div>
                        </li>
                      );
                    })}
                  </Fade>
                </ul>
              </div>
            );
          })}
        </Fade>
      </div>
    </section>
  );
};

export default Experience;
