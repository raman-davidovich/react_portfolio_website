import React from "react";
import "./footer.scss";
import { Tooltip } from "react-tooltip";
import footerData from "./constants";
import { Fade } from "react-awesome-reveal";
import { isDesktop } from "react-device-detect";

const Footer = () => {
  return (
    <footer>
      <Fade delay={500} direction="up" triggerOnce>
        <a href="/#" className="footer__logo">
          Raman Davidovich
        </a>
      </Fade>

      <nav>
        <ul className="permalinks">
          <Fade delay={500} direction="right" cascade triggerOnce damping={0.3}>
            {footerData.info.map(({ href, content }) => {
              return (
                <li key={content}>
                  <a href={href} aria-label={`Go to ${content} section.`}>
                    {content}
                  </a>
                </li>
              );
            })}
          </Fade>
        </ul>
      </nav>

      <ul className="footer__socials">
        <Fade delay={500} direction="up" cascade triggerOnce damping={0.5}>
          {footerData.socials.map(({ href, dataTooltipContent, icon }) => {
            return (
              <li key={dataTooltipContent}>
                <a
                  href={href}
                  aria-label={`Visit Raman's ${dataTooltipContent} account.`}
                  target="_blank"
                  rel="noreferrer"
                  className="tooltip_footer"
                  data-tooltip-content={dataTooltipContent}
                  data-tooltip-delay-show={500}
                  data-tooltip-variant="dark"
                  data-tooltip-hidden={!isDesktop}
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </Fade>
      </ul>
      <Tooltip anchorSelect=".tooltip_footer" />

      <Fade delay={1000} direction="up" triggerOnce>
        <div className="footer__copyright">
          <small>{new Date().getFullYear()} &copy; All rights reserved.</small>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
