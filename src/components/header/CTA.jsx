import React from "react";
import CV from "../../assets/CV.pdf";
import { Fade } from "react-awesome-reveal";
import Button from "../shared/Button/Button";

const CTA = () => {
  return (
    <div className="cta">
      <Fade delay={2000} direction="right" cascade triggerOnce>
        <Button tag="a" href={CV} download>
          Download CV
        </Button>

        <Button primary tag="a" href="#contacts">
          Let's Talk
        </Button>
      </Fade>
    </div>
  );
};

export default CTA;
