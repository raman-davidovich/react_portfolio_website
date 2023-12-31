import React from "react";
import "./footer.scss";
import { Tooltip } from "react-tooltip";
import footerData from "./constants";
import { isDesktop } from "react-device-detect";
import RevealWithDelay from "../shared/RevealWithDelay/RevealWithDelay";

const Footer = () => {
  return (
    <footer>
      <RevealWithDelay width="100%">
        <a href="/#" className="footer__logo">
          Raman Davidovich
        </a>
      </RevealWithDelay>

      <nav>
        <ul className="permalinks">
          {footerData.info.map(({ href, content }) => {
            return (
              <RevealWithDelay key={content} width="100%">
                <li>
                  <a href={href} aria-label={`Go to ${content} section.`}>
                    {content}
                  </a>
                </li>
              </RevealWithDelay>
            );
          })}
        </ul>
      </nav>

      <ul className="footer__socials">
        {footerData.socials.map(({ href, dataTooltipContent, icon }) => {
          return (
            <RevealWithDelay key={dataTooltipContent}>
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
            </RevealWithDelay>
          );
        })}
      </ul>
      <Tooltip anchorSelect=".tooltip_footer" />

      <div className="footer__copyright">
        <RevealWithDelay width="100%">
          <small>{new Date().getFullYear()} &copy; All rights reserved.</small>
        </RevealWithDelay>
      </div>
    </footer>
  );
};

export default Footer;
