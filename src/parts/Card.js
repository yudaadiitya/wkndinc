import React from "react";

const Card = ({ title, paragraph }) => (
  <div className="bg-white h-140 w-247 slide mr-3">
    <p className="font-black m-5 text-lg">{title}</p>
    <p className="text-xs m-5">{paragraph}</p>
  </div>
);

export default Card;
