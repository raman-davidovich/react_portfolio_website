import React from "react";
import "./portfolio.scss";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import portfolioData from "./constants";
import { Tooltip } from "react-tooltip";
import { isDesktop } from "react-device-detect";
import Reveal from "../shared/Reveal/Reveal";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <SectionTitle>
        <Reveal>
          <span>My Recent Work</span>
        </Reveal>
        <br />
        <Reveal>
          <div>Portfolio</div>
        </Reveal>
      </SectionTitle>

      <ul className="container portfolio__container">
        {portfolioData.map(({ id, image, title, technologies, links }) => {
          return (
            <li key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <Reveal>
                  <img src={image} alt={`${title} screenshot`} loading="lazy" />
                </Reveal>
              </div>
              <Reveal>
                <h3>{title}</h3>
              </Reveal>
              <Reveal>
                <p>{technologies}</p>
              </Reveal>
              <div className="portfolio__item-cta">
                {links.map(
                  ({ href, className, dataTooltipContent, content }) => {
                    return (
                      <Reveal key={content}>
                        <a
                          href={href}
                          className={className}
                          target="_blank"
                          rel="noreferrer"
                          data-tooltip-content={dataTooltipContent}
                          data-tooltip-delay-show={2000}
                          data-tooltip-variant="info"
                          data-tooltip-hidden={!isDesktop}
                        >
                          {content}
                        </a>
                      </Reveal>
                    );
                  }
                )}
                <Tooltip anchorSelect=".tooltip_portfolio" />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Portfolio;
