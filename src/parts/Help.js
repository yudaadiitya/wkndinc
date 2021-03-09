import React from "react";
import helpImage1_1 from "../assets/images/image.jpg";
import helpImage1_2 from "../assets/images/image@2x.jpg";
import helpImage1_3 from "../assets/images/image@3x.jpg";
import helpImage2_1 from "../assets/images/image_2.jpg";
import helpImage2_2 from "../assets/images/image_2@2x.jpg";
import helpImage2_3 from "../assets/images/image_2@3x.jpg";
import helpImage3_1 from "../assets/images/image_3.jpg";
import helpImage3_2 from "../assets/images/image_3@2x.jpg";
import helpImage3_3 from "../assets/images/image_3@3x.jpg";
import legoDown from "../assets/images/group-3.png";
import legoDown2 from "../assets/images/group-3@2x.png";
import legoDown3 from "../assets/images/group-3@3x.png";
import iconOval from "../assets/images/oval-icon.svg";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

export default function Help() {
  return (
    <>
      <div className="lg:text-center bg-path bg-black lg:bg-opacity-100 bg-opacity-0">
        <div className="lg:pt-100 pt-67">
          <Fade>
            <p className="text-lg text-white mb-30 px-32 lg:px-0 font-black">
              Help & Tips
            </p>
          </Fade>
        </div>
        <div class="px-32 lg:px-0 lg:flex justify-center text-left text-white font-bold text-msm">
          <Fade bottom delay={500 * 1}>
            <div className="relative">
              <img
                className="lg:w-376 lg:311 h-176"
                src={helpImage1_1}
                srcSet={`${helpImage1_2} 2x, ${helpImage1_3} 3x`}
                alt="h&t"
              />
              <div className="flex bottom-0 h-18 absolute bg-black bg-opacity-50 w-full pr-5 pl-25">
                <p className="pt-17">Start quickly with simple steps</p>
                <img src={iconOval} alt="oval-icon" />
              </div>
            </div>
          </Fade>
          <Fade bottom delay={500 * 2}>
            <div className="relative">
              <img
                className="lg:mx-2.5 mx-0 lg:my-0 my-2.5 lg:w-376 lg:311 h-176"
                src={helpImage2_1}
                srcSet={`${helpImage2_2} 2x, ${helpImage2_3} 3x`}
                alt="h&t"
              />
              <div className="flex bottom-0 h-18 absolute bg-black bg-opacity-50 w-full pr-5 pl-25">
                <p className="pt-17">Run smoothly at vero eos et accusamus</p>
                <img src={iconOval} alt="oval-icon" />
              </div>
            </div>
          </Fade>
          <Fade bottom delay={500 * 3}>
            <div className="relative">
              <img
                className="lg:w-376 lg:311 h-176"
                src={helpImage3_1}
                srcSet={`${helpImage3_2} 2x, ${helpImage3_3} 3x`}
                alt="h&t"
              />
              <div className="flex bottom-0 h-18 absolute bg-black bg-opacity-50 w-full pr-5 pl-25">
                <p className="pt-17">Denounce with righteous indignation</p>
                <img src={iconOval} alt="oval-icon" />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="lg:text-center lg:pt-127 pt-67 h-full pb">
        <Roll>
          <img
            className="hidden lg:block float-left"
            src={legoDown}
            srcSet={`${legoDown2} 2x, ${legoDown3} 3x`}
            alt="group-3"
          />
        </Roll>
        <Fade>
          <p className="text-lg text-white mb-30 lg:px-400 px-32 font-black">
            You're all set.
          </p>
          <p className="lg:text-sm text-msm text-pov lg:px-374 px-32 leading-6 lg:leading-1 lg:tracking-normal tracking-wide text-white">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
          <img
            className="lg:mt-0 mt-67 lg:hidden block w-253 h-337"
            src={legoDown}
            srcSet={`${legoDown2} 2x, ${legoDown3} 3x`}
            alt="group-3"
          />
          <div className=""></div>
        </Fade>
      </div>
      <div className="clear-both"></div>
    </>
  );
}
