import React from "react";
import "../Home Page/CSS/Slider.css";

const Slider = () => {
  return (
    <>
      <section id="slider">
        <section id="sliderBox">
          <button className="left-slide-btn">
            <svg
              viewBox="0 0 16 27"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                fill="grey"
                className="FXox6K"
              ></path>
            </svg>
          </button>

          <div className="slide-img-div">
            <a href="/" target="_blank">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/09a4d20b8c2f5d10.jpg?q=50"
                alt=""
              />
            </a>
            <a href="/" target="_blank">
              <img
                src="https://rukminim1.flixcart.com/flap/1688/280/image/75a15c3e19c3f7de.jpg?q=50"
                alt=""
              />
            </a>
            <a href="/" target="_blank">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/6363749479abe09a.jpg?q=50"
                alt=""
              />
            </a>
            <a href="/" target="_blank">
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/4d9c3b25ed5893a1.jpg?q=50"
                alt=""
              />
            </a>
          </div>

          <button className="right-slide-btn">
            <svg
              viewBox="0 0 16 27"
              xmlns="http://www.w3.org/2000/svg"
              className="right-slide-svg-rotate"
            >
              <path
                d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                fill="grey"
                className="FXox6K"
              ></path>
            </svg>
          </button>
        </section>
      </section>
    </>
  );
};

export default Slider;
