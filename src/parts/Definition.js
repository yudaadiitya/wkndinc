import React from "react";
import legoSide from "../assets/images/group-4.png";
import legoSide2 from "../assets/images/group-4@2x.png";
import legoSide3 from "../assets/images/group-4@3x.png";
import Zoom from "react-reveal/Zoom";
import Roll from 'react-reveal/Roll';


export default function Definition() {
  return (
    <>
      <Roll>
        <div className="flex justify-end lg:pt-36 pt-0">
          <img
            src={legoSide}
            srcSet={`${legoSide2} 2x, ${legoSide3} 3x`}
            alt="group-4"
          />
        </div>
      </Roll>
      <div className="flex justify-center mb-38">
        <Zoom>
          <p className="lg:text-md text-mmd lg:tracking-tight tracking-wide font-medium lg:leading-8 text-right lg:px-374 px-8 lg:pt-0 pt-16">
            <span className="text-richBlue font-bold">Deffinition;&nbsp;</span>a
            practice or exercise to test or improve one's fitness for athletic
            competition, ability, or performance to exhaust (something, such as
            a mine) by working to devise, arrange, or achieve by resolving
            difficulties. Merriam-Webster.com Dictionary.
            <h1 className="text-white font-semibold italic lg:mt-30 mt-5">
              -weekend team
            </h1>
          </p>
        </Zoom>
      </div>
    </>
  );
}
