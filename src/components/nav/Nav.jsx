import React, { useContext, useEffect, useState } from "react";
import "./nav.scss";
import navData from "./constants";
import { Tooltip } from "react-tooltip";
import { InViewIDContext } from "../../context/InViewIDContext";
import classNames from "classnames";
import useDebounce from "@rooks/use-debounce";
import { isDesktop } from "react-device-detect";
import RevealWithDelay from "../shared/RevealWithDelay/RevealWithDelay";

const Nav = () => {
  const { inViewSectionID } = useContext(InViewIDContext);

  const [activeNav, setActiveNav] = useState(inViewSectionID);

  const setDebouncedNav = useDebounce(setActiveNav, 400);

  useEffect(() => {
    setDebouncedNav(inViewSectionID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewSectionID]);

  return (
    <div className="navigation">
      <RevealWithDelay>
        <nav>
          {navData.map(({ href, className, dataTooltipContent, icon }) => {
            return (
              <a
                key={className}
                href={href}
                aria-label={`Go to section ${dataTooltipContent}`}
                onClick={() => setActiveNav({ className })}
                className={classNames("tooltip_nav", {
                  active: activeNav === className,
                })}
                data-tooltip-content={dataTooltipContent}
                data-tooltip-delay-show={500}
                data-tooltip-variant="info"
                data-tooltip-hidden={!isDesktop}
              >
                {icon}
              </a>
            );
          })}

          <Tooltip anchorSelect=".tooltip_nav" />
        </nav>
      </RevealWithDelay>
    </div>
  );
};

export default Nav;
