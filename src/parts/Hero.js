import React from "react";
import legoHero from "../assets/images/bitmap.png";
import legoHero2 from "../assets/images/bitmap@2x.png";
import legoHero3 from "../assets/images/bitmap@3x.png";
import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <div className="pt-21 text-center">
      <Fade>
        <p className="lg:text-xl text-mxl text-white font-black mb-5">
          WEEKEND FROM HOME
        </p>
        <p className="lg:text-md text-mmd font-semibold italic text-white mb-67">
          Stay active with a little workout.
        </p>
      </Fade>
      <Fade bottom>
        <img
          className="absolute m-0 inline -ml-92 self-center"
          src={legoHero}
          srcSet={`${legoHero2} 2x, ${legoHero3} 3x`}
          alt="lego hero"
        />
        <div className="relative flex justify-center mt-272">
          <button className="text-mmd bg-white btn-hero shadow-pinky focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ">
            Let's Go
          </button>
        </div>
      </Fade>
    </div>
  );
}
