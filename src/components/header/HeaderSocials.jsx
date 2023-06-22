import React from "react";
import headerData from "./ constants";
import { Tooltip } from "react-tooltip";
import { isDesktop } from "react-device-detect";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
            data-tooltip-hidden={!isDesktop}
          >
            {icon}
          </a>
        );
      })}
      <Tooltip anchorSelect=".tooltip_header-socials" />
    </div>
  );
};

export default HeaderSocials;
