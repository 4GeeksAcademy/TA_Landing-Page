import React from "react";
import chicago from "../../img/chicago.jpg";
import LA from "../../img/LA.jpg";
import NY from "../../img/NY.jpg";

export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active d-flex justify-content-center">
          <img src={NY} style={{ width: "40rem", height: "30rem" }} alt="NY" />
        </div>
        <div className="carousel-item d-flex justify-content-center">
          <img
            src={chicago}
            style={{ width: "40rem", height: "30rem" }}
            alt="Chicago"
          />
        </div>
        <div className="carousel-item d-flex justify-content-center">
          <img src={LA} style={{ width: "40rem", height: "30rem" }} alt="LA" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{
            backgroundColor: "#000",
            border: "1px solid #fff",
            borderRadius: "10px",
          }}
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{
            backgroundColor: "#000",
            border: "1px solid #fff",
            borderRadius: "10px",
          }}
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
