import React from "react";
import "./portfolio.scss";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import portfolioData from "./constants";
import { Tooltip } from "react-tooltip";
import { isDesktop } from "react-device-detect";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <SectionTitle>
        <span>My Recent Work</span>
        <br />
        <div>Portfolio</div>
      </SectionTitle>

      <ul className="container portfolio__container">
        {portfolioData.map(({ id, image, title, technologies, links }) => {
          return (
            <li key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={`${title} screenshot`} loading="lazy" />
              </div>
              <h3>{title}</h3>
              <p>{technologies}</p>
              <div className="portfolio__item-cta">
                {links.map(
                  ({ href, className, dataTooltipContent, content }) => {
                    return (
                      <a
                        key={content}
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
