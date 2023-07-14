import { useState } from "react";
import { Images } from "../api/Data";
import "../App.css";
export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const handleMoveForward = () => {
    // console.log(Images.length);
    setCurrent((prevState) =>
      prevState === Images.length - 1 ? 0 : prevState + 1
    );
  };
  const handleMoveBackward = () => {
    setCurrent((prevState) =>
      prevState === 0 ? Images.length - 1 : prevState - 1
    );
  };
  return (
    <div
      className="carousel-container"
      style={{ backgroundImage: `url(${Images[current].img})` }}
    >
      <h1 onClick={handleMoveForward}>{`=>`}</h1>
      <h1>{Images[current].title}</h1>
      <h1 onClick={handleMoveBackward}>{`<=`}</h1>
    </div>
  );
};
