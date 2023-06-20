import React from "react";
import headerData from "./ constants";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <Fade delay={4000} direction="left" cascade triggerOnce damping={0.3}>
        {headerData.map(({ href, dataTooltipContent, icon }) => {
          return (
            <a
              key={dataTooltipContent}
              href={href}
              aria-label={`Visit Raman's ${dataTooltipContent} account.`}
              target="_blank"
              rel="noreferrer"
              className="tooltip_header-socials"
              data-tooltip-content={dataTooltipContent}
              data-tooltip-delay-show={500}
              data-tooltip-variant="info"
              data-tooltip-place="right"
            >
              {icon}
            </a>
          );
        })}
      </Fade>
      <Tooltip anchorSelect=".tooltip_header-socials" />
    </div>
  );
};

export default HeaderSocials;
