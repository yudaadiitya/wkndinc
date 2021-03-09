import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Pov() {
  return (
    <>
      <Zoom>
        <div className="lg:text-center">
          <div className="lg:pt-24 pt-38">
            <p className="text-lg text-white mb-30 px-32 lg:px-0 font-black">
              POV
            </p>
          </div>
          <div className="flex justify-center">
            <div className="lg:text-sm text-msm text-pov px-32 lg:px-374 leading-6 lg:leading-1 lg:tracking-normal tracking-wide text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud ullamco laboris nisi ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:text-center">
          <div className="pt-67">
            <p className="text-lg text-white mb-30 px-32 lg:px-0 font-black">
              Resource
            </p>
          </div>
          <div className="flex justify-center">
            <div className="lg:text-sm text-msm text-pov px-32 lg:px-374 leading-6 lg:leading-1 lg:tracking-normal tracking-wide text-white">
              <p>
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when our power of choice is untrammelled and when
                nothing prevents our being able to do what we like best
              </p>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
}
