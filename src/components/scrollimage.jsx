import React from "react";
import headph from "../assets/headph.png";

const Scroll = () => {
  return (
    <div className="container-fluid text-center border position-relative bor" style={{ height: "400px" }}>
      <div className="w-50 p-5 text-start">
        <h2>Unleash Superior Sound: Headphones Designed for You</h2>
        <h5>
          Explore our premium headphones, designed for superior sound and style. Whether it's wireless freedom or noise-cancelling power, find your perfect match and elevate every listening experience to new heights.
        </h5>
        <button type="button" className="btn btn-primary mt-4 p-2">View Product</button>
      </div>
      <img
        src={headph}
        className="position-absolute img-fluid top-0 end-0 px-5 me-5 mt-2"
        style={{
          height: "20em",
          animation: "float 3s ease-in-out infinite"
        }}
        alt="headphone"
      />
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Scroll;
