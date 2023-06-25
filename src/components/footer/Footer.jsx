import React from "react";
import "./footer.scss";
import { Tooltip } from "react-tooltip";
import footerData from "./constants";
import { isDesktop } from "react-device-detect";
import Reveal from "../shared/Reveal/Reveal";

const Footer = () => {
  return (
    <footer>
      <Reveal width="100%">
        <a href="/#" className="footer__logo">
          Raman Davidovich
        </a>
      </Reveal>

      <nav>
        <ul className="permalinks">
          {footerData.info.map(({ href, content }) => {
            return (
              <Reveal key={content}>
                <li>
                  <a href={href} aria-label={`Go to ${content} section.`}>
                    {content}
                  </a>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </nav>

      <ul className="footer__socials">
        {footerData.socials.map(({ href, dataTooltipContent, icon }) => {
          return (
            <Reveal key={dataTooltipContent}>
              <li>
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
            </Reveal>
          );
        })}
      </ul>
      <Tooltip anchorSelect=".tooltip_footer" />

      <div className="footer__copyright">
        <Reveal width="100%">
          <small>{new Date().getFullYear()} &copy; All rights reserved.</small>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
