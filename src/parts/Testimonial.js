import React, { Component } from "react";
import arrowOff from "../assets/images/oval-icon-copy.svg";
import arrowOn from "../assets/images/oval-icon.svg";
import Card from "./Card";
import Carousel, { consts } from "react-elastic-carousel";
import oval from "../assets/images/oval.svg";
import Fade from "react-reveal/Fade";

export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      {
        width: 1,
        itemsToShow: 1,
        itemsToScroll: 1,
        pagination: false,
        showArrows: false,
      },
      { width: 375, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 1150, itemsToShow: 2, itemsToScroll: 2 },
      { width: 1750, itemsToShow: 3 },
    ];
  }
  myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <img src={arrowOff} alt="arrow-prev" />
      ) : (
        <img src={arrowOn} alt="arrow-next" />
      );
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }
  render() {
    return (
      <>
        <Fade>
          <div className="inline-flex">
            <img
              className="pl-16 lg:pl-283 lg:float-left h-full"
              src={oval}
              alt="oval"
            />
            <p className="text-lg font-black text-white lg:pt-46 pt-69 lg:pl-217 lg:ml-0 -ml-123">
              Testimonial
            </p>
          </div>
          <div className="bg-half flex justify-center">
            <div className="mask">
              <Carousel
                itemsToShow={2}
                renderArrow={this.myArrow}
                breakPoints={this.breakPoints}
              >
                <Card
                  title="Arron"
                  paragraph="I couldn't have asked for more than this. I wish I would have thought of it first. This is simply unbelievable!"
                />
                <Card
                  title="Kelsey"
                  paragraph="Wow what great service, I love it! Without WEEKEND, we would have gone by now. You guys rock!"
                />
                <Card
                  title="Steven"
                  paragraph="I wish I would have thought of it first."
                />
                <Card
                  title="Charley"
                  paragraph="Fantastic, I'm totally blown away by WEEKEND"
                />
                <Card
                  title="Vanessa"
                  paragraph="This is unbelievable. After using WEEKEND my business skyrocketed!"
                />
              </Carousel>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}
