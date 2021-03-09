import React from "react";
import navLogo from "../assets/images/bitmap_2.jpg";
import navLogo2 from "../assets/images/bitmap_2@2x.jpg";
import navLogo3 from "../assets/images/bitmap_2@3x.jpg";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <Fade>
      <div className="bg-white pl-6 h-17 lg:pl-213 flex items-center">
        <img
          className="float-left"
          src={navLogo}
          srcSet={`${navLogo2} 2x, ${navLogo3} 3x`}
          alt="nav logo"
        />
        <p className="header-text leading-4 ml-3.5">
          <span className="text-xs">Good Morning</span> <br />
          <span className="font-bold">Fellas</span>
        </p>
      </div>
    </Fade>
  );
}
