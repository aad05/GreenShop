import React from "react";
import "./style.css";
import Carousel from "react-elastic-carousel";
import Gul2 from "../../../assets/imgs/ProductsCarousel/gul2.png";
import Gul3 from "../../../assets/imgs/ProductsCarousel/gul3.png";
import Gul4 from "../../../assets/imgs/ProductsCarousel/gul4.png";
import Gul5 from "../../../assets/imgs/ProductsCarousel/gul5.png";
import { Card } from "./style";

const ProductCarousel = () => {
  const breakPoints = [
    { width: "1", itemsToShow: 1 },
    { width: "300", itemsToShow: 2 },
    { width: "568", itemsToShow: 3 },
    { width: "800", itemsToShow: 4 },
    { width: "1100", itemsToShow: 5 },
  ];

  return (
    <div>
      <div style={{ marginBottom: "12px" }} className="price">
        You may be interested in
      </div>
      <div
        style={{
          border: " 0.3px solid rgba(70, 163, 88, 0.5)",
          marginBottom: "40px",
        }}
      ></div>
      <Carousel breakPoints={breakPoints}>
        <Card>
          <img src={Gul2} alt="" />
          <div className="wrap">
            <div className="title">Beach Spider Lily</div>
            <div className="price">$129.00</div>
          </div>
        </Card>
        <Card>
          <img src={Gul3} alt="" />
          <div className="wrap">
            <div className="title">Blushing Bromeliad</div>
            <div className="price">$139.00</div>
          </div>
        </Card>
        <Card>
          <img src={Gul4} alt="" />
          <div className="wrap">
            <div className="title">Aluminum Plant</div>
            <div className="price">$179.00</div>
          </div>
        </Card>
        <Card>
          <img src={Gul5} alt="" />
          <div className="wrap">
            <div className="title">Bird's Nest Fern</div>
            <div className="price">$99.00</div>
          </div>
        </Card>

        <Card>
          <img src={Gul2} alt="" />
          <div className="wrap">
            <div className="title">Blushing Bromeliad</div>
            <div className="price">$139.00</div>
          </div>
        </Card>
        <Card>
          <img src={Gul3} alt="" />
          <div className="wrap">
            <div className="title">Beach Spider Lily</div>
            <div className="price">$49.00</div>
          </div>
        </Card>
        <Card>
          <img src={Gul4} alt="" />
          <div className="wrap">
            <div className="title">Aluminum Plant</div>
            <div className="price">$259.00</div>
          </div>
        </Card>
        <Card>
          <img src={Gul5} alt="" />
          <div className="wrap">
            <div className="title">Bird's Nest Fern</div>
            <div className="price">$113.00</div>
          </div>
        </Card>

        <Card>
          <img src={Gul2} alt="" />
          <div className="wrap">
            <div className="title">Beach Spider Lily</div>
            <div className="price">$239.00</div>
          </div>
        </Card>
        <Card>
          <img src={Gul3} alt="" />
          <div className="wrap">
            <div className="title">Blushing Bromeliad</div>
            <div className="price">$121.00</div>
          </div>
        </Card>
        <Card>
          <img src={Gul4} alt="" />
          <div className="wrap">
            <div className="title">Bird's Nest Fern</div>
            <div className="price">$642.00</div>
          </div>
        </Card>
        <Card>
          <img src={Gul5} alt="" />
          <div className="wrap">
            <div className="title">Blushing Bromeliad</div>
            <div className="price">$111.00</div>
          </div>
        </Card>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
