import React from "react";
import "./footer.scss";
import { Tooltip } from "react-tooltip";
import footerData from "./constants";
import { isDesktop } from "react-device-detect";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        Raman Davidovich
      </a>

      <nav>
        <ul className="permalinks">
          {footerData.info.map(({ href, content }) => {
            return (
              <li key={content}>
                <a href={href} aria-label={`Go to ${content} section.`}>
                  {content}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="footer__socials">
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
      </ul>
      <Tooltip anchorSelect=".tooltip_footer" />

      <div className="footer__copyright">
        <small>{new Date().getFullYear()} &copy; All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
