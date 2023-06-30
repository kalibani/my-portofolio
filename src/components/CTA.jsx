import React from "react";
import CV from "../assets/files/CV.pdf";

function CTA() {
  return (
    <div className="mt-10 flex gap-5 justify-center">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
}

export default CTA;
