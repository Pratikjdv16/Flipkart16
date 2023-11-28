import React from "react";
import "../Login Page/CSS/LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoginDisplay,
  getLoginInfo,
  setLoginInfo,
  styleChange,
} from "../../Redux/Slices/LoginSlice";

const LoginPage = () => {
  const loginData = useSelector((state) => {
    return state.Slice6;
  });

  const dispatch = useDispatch();

  return (
    <>
      <section id="login" style={{ display: loginData.style.LoginDisplay }}>
        <section id="loginBox">
          {/* <!-- Login-Page --> */}
          <div id="login-page-div">
            <div className="left-login-div">
              <div className="left-login-top-div">
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "white",
                  }}
                >
                  Login
                </span>
                <p style={{ color: "#dbdbdb", lineHeight: "20px" }}>
                  Get access to your Orders, Wishlist and Recommendations
                </p>
              </div>
              <div className="left-login-bottom-div "></div>
            </div>
            <div className="right-login-div">
              <div className="right-login-top-div">
                <div
                  id="right-login-input-div"
                  onClick={() => {
                    dispatch(styleChange("onClick"));
                  }}
                  onBlur={() => {
                    dispatch(styleChange("onBlur"));
                  }}
                >
                  <input
                    type="text"
                    id="right-login-input"
                    style={{
                      borderBottomColor: loginData.style.borderBottomColor,
                    }}
                    value={loginData.loginInformation}
                    onChange={(event) => {
                      dispatch(getLoginInfo(event.target.value));
                    }}
                  />
                  <p
                    style={{
                      top: loginData.style.top,
                      fontSize: loginData.style.fontSize,
                    }}
                  >
                    Enter Email
                  </p>
                  {loginData.loginInfoError === false ? (
                    <span className="login-info-error">
                      Please enter valid Email Id
                    </span>
                  ) : null}
                </div>
                <div className="right-login-para">
                  <span>
                    By continuing, you agree to Flipkart's{" "}
                    <a
                      href="https://www.flipkart.com/pages/terms"
                      style={{ color: "#2874f1", textDecoration: "none" }}
                    >
                      Terms of use
                    </a>{" "}
                    <span>and</span>{" "}
                    <a
                      href="https://www.flipkart.com/pages/privacypolicy"
                      style={{ color: "#2874f1", textDecoration: "none" }}
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>
                <div>
                  <button
                    className="right-login-requestOtp-btn"
                    onClick={() => {
                      dispatch(setLoginInfo());
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
              {/* <div className="right-login-bottom-div">
                <div>
                  <a
                    href="/"
                    style={{ color: "#2874f1", textDecoration: "none" }}
                  >
                    New to Flipkart? Create an account
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          {/* <!-- Button --> */}
          <div id="cross-btn-div">
            <button
              className="cross-btn"
              onClick={() => {
                dispatch(setLoginDisplay());
              }}
            >
              ✕
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default LoginPage;
