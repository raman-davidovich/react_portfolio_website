import React from "react";
import CV from "../../assets/CV.pdf";
import Button from "../shared/Button/Button";

const CTA = () => {
  return (
    <div className="cta">
      <Button tag="a" href={CV} download>
        Download CV
      </Button>

      <Button primary tag="a" href="#contacts">
        Let's Talk
      </Button>
    </div>
  );
};

export default CTA;
