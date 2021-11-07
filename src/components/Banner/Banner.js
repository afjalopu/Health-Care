import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./child-in-hospital-bed-inline.jpg";
import image2 from "./gabriel-tovar-3hMa18xji1w-unsplash.jpg";
import image3 from "./mother-her-daughter-paying-visit-doctor.jpg";
import image4 from "./my-daughter-isn-t-afraid-pay-visit-here.jpg";
import image5 from "./national-cancer-institute-yg1Zayn0Few-unsplash.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={image1} className="d-block w-100" height="400px" alt="" />
          <Carousel.Caption>
            <p className="text-dark" >“Time and health are two precious assets that we don’t recognize and appreciate until they have been depleted.” – Denis Waitley </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image4} className="d-block w-100" height="550px" alt="" />
          <Carousel.Caption>
            <p className="text-dark" >“A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned.” – Naval Ravikant</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image5} className="d-block w-100" height="550px" alt="" />
          <Carousel.Caption>
            <p className="text-dark">“A good laugh and a long sleep are the best cures in the doctor’s book.” – Irish proverb </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} className="d-block w-100" height="550px" alt="" />
          <Carousel.Caption>
            <p className="text-dark"> “Let food be thy medicine and medicine be thy food.” – Hippocrates</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} className="d-block w-100" height="550px" alt="" />
          <Carousel.Caption>
            <p className="text-dark">“A sad soul can be just as lethal as a germ.” – John Steinbeck </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
    </div>
  );
};

export default Banner;
