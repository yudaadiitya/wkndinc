import React from "react";
import Fade from "react-reveal/Fade";

export default function Footer() {
  return (
    <Fade>
      <div className="px-24 lg:px-213 bg-richBlue lg:py-22 py-25 flex justify-between">
        <p className="text-white lg:text-msm text-xs">
          <span className="font-bold">wknd@</span>2020
        </p>
        <div className="border-solid border alpha border-white rounded-full lg:h-6 h-18.5 lg:w-126 w-94">
          <p className="lg:text-mmsm text-xxs h-18 lg:h-6 text-center pt-0.6 text-white lg:w-106 w-76 lg:mx-2.5 mx-2.4 font-light">
            alpha version 0.1
          </p>
        </div>
      </div>
    </Fade>
  );
}
