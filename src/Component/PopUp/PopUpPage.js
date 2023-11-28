import React from "react";
import "./CSS/PopUpPage.css";
import { removeProduct, cancelPopUp } from "../../Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { confirmPopUpOk } from "../../Redux/Slices/PaymentSlice";
import { NavLink } from "react-router-dom";

const PopUpPage = ({ heading, text, btn1, btn2 }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="popUp">
        <div
          className="popUp-textDiv"
          style={btn2 === "OK" ? { alignItems: "center" } : null}
        >
          <p
            className="popUp-heading"
            style={btn2 === "OK" ? { fontSize: "28px" } : null}
          >
            {heading}
          </p>
          {heading === "Remove Item" ? (
            <p className="popUp-text">{text}</p>
          ) : null}
        </div>
        <div className="popUp-btnDiv">
          {btn2 === "Remove" ? (
            <>
              <button
                className="popUp-btn cancel-btn"
                onClick={() => {
                  dispatch(cancelPopUp());
                }}
              >
                {btn1}
              </button>
              <button
                className="popUp-btn ok-btn"
                style={{ marginLeft: "2rem" }}
                onClick={() => {
                  dispatch(removeProduct());
                }}
              >
                {btn2}
              </button>
            </>
          ) : null}
          {btn2 === "OK" ? (
            <NavLink to={"/productFilterPage"}>
              <button
                className="popUp-btn ok-btn"
                onClick={() => {
                  dispatch(confirmPopUpOk());
                }}
              >
                {btn2}
              </button>
            </NavLink>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PopUpPage;
