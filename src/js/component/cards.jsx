import React from "react";

export default function Cards(props) {
  return (
    <div className="card mx-3" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={props.img}
        alt="..."
        style={{ height: "15rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">Interesting Title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="https://www.google.com/" className="btn btn-outline-dark">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
