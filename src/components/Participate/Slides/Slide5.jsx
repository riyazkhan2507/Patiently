import React from "react";

const Slide5 = ({ changeSlide }) => {
  return (
    <div className="d-flex flex-column m-5">
      <h2>QUESTION 3 OF 4</h2>
      <h3>Have you ever been treated in an emergency room ?</h3>
      <div style={{ paddingBottom: "90px" }}>
        <div
          className="d-flex flex-row m-3"
          style={{ justifyContent: "space-between" }}
        >
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-5"
          >
            No
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-5"
          >
            yes
          </button>
        </div>
      </div>
      <div
        className="d-flex flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <a href="#">Cancel</a>
        <a href="#">Break</a>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            changeSlide(6);
          }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Slide5;
