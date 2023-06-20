import React, { useContext, useEffect } from "react";
import "./services.scss";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { servicesData } from "./constants";
import { useInView } from "react-intersection-observer";
import { InViewIDContext } from "../../context/InViewIDContext";
import { Fade } from "react-awesome-reveal";
import List from "../shared/List/List";
import useWindowSize from "@rooks/use-window-size";
import { getThreshold } from "../shared/utils";

const Services = () => {
  const { innerHeight, innerWidth } = useWindowSize();
  const { changeInViewID } = useContext(InViewIDContext);

  const { ref, inView } = useInView({
    threshold: getThreshold(innerHeight, innerWidth),
  });

  useEffect(
    () => changeInViewID(inView ? "services" : ""),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inView]
  );

  return (
    <section id="services" ref={ref}>
      <SectionTitle>
        <Fade delay={500} direction="down" cascade triggerOnce damping={0.3}>
          <span>What I Offer</span>
          <br />
          <div>Services</div>
        </Fade>
      </SectionTitle>

      <div className="container services__container">
        <Fade delay={1500} direction="up" cascade triggerOnce damping={0.3}>
          {servicesData.map(({ sectionTitle, list }) => {
            return (
              <div className="service" key={sectionTitle}>
                <div className="service__head">
                  <h3>{sectionTitle}</h3>
                </div>

                <List list={list}></List>
              </div>
            );
          })}
        </Fade>
      </div>
    </section>
  );
};

export default Services;
