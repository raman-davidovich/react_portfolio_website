import React from "react";
import CV from "../../assets/CV.pdf";
import Button from "../shared/Button/Button";
import Reveal from "../shared/Reveal/Reveal";

const CTA = () => {
  return (
    <div className="cta">
      <Reveal>
        <Button tag="a" href={CV} download>
          Download CV
        </Button>
      </Reveal>

      <Reveal>
        <Button primary tag="a" href="#contacts">
          Let's Talk
        </Button>
      </Reveal>
    </div>
  );
};

export default CTA;
