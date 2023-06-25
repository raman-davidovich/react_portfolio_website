import React, { useContext, useEffect } from "react";
import "./services.scss";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { servicesData } from "./constants";
import { useInView } from "react-intersection-observer";
import { InViewIDContext } from "../../context/InViewIDContext";
import List from "../shared/List/List";
import useWindowSize from "@rooks/use-window-size";
import { getThreshold } from "../shared/utils";
import Reveal from "../shared/Reveal/Reveal";

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
        <Reveal>
          <span>What I Offer</span>
        </Reveal>
        <br />
        <Reveal>
          <div>Services</div>
        </Reveal>
      </SectionTitle>

      <div className="container services__container">
        {servicesData.map(({ sectionTitle, list }) => {
          return (
            <div className="service" key={sectionTitle}>
              <div className="service__head">
                <Reveal width="100%">
                  <h3>{sectionTitle}</h3>
                </Reveal>
              </div>

              <List list={list}></List>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
