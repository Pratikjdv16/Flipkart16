import React, { useEffect } from "react";
import "../Component/Navbar.css";
import Plus from "../Component/Navbar Icons/flipkart-plus-icon.jpg";
import Search from "../Component/Navbar Icons/search-icon.png";
import Cross from "../Component/Navbar Icons/cross2-icon.png";
import User_icon from "../Component/Navbar Icons/user-icon.png";
import Cart from "../Component/Navbar Icons/cart-icon.png";
import { NavLink } from "react-router-dom";
import More_Icon from "../Component/Navbar Icons/plus-icon.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  setFilterProducts,
  deleteSearchValue,
  selectProduct,
} from "../Redux/Slices/SearchFilter";
import ProductData from "../Data/Products.json";
import { setLoginDisplay, logoutUser } from "../Redux/Slices/LoginSlice";
import LoginPage from "./Login Page/LoginPage";
import Triangle_icon from "./Navbar Icons/triangle-icon.png";

const Navbar = () => {
  const searchData = useSelector((state) => state.Slice4);
  const cartData = useSelector((state) => {
    return state.Slice5.cartProducts;
  });

  const loginData = useSelector((state) => {
    return state.Slice6.saveLoginInfo;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(ProductData));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(loginData));
  }, [loginData]);

  return (
    <>
      <nav id="navbar">
        <section id="navbarBox">
          {/* FlipKart-logo */}
          <div id="flipkart-logo" className="navbar-class">
            <p id="flipkart-logo-top-text">Flipkart</p>
            <span
              style={{
                width: "79px",
                textAlign: "center",
                fontSize: "1px",
                height: "15px",
                marginTop: "-2px",
              }}
            >
              <a id="flipkart-logo-bottom-text" href="/" target="_blank" rel="">
                Explore <span id="plus">Plus</span>
              </a>
              <span>
                <img id="flipkart-logo-image" src={Plus} alt="?" />
              </span>
            </span>
          </div>

          {/* Search-input  */}
          <div id="search" className="navbar-class">
            <input
              type="text"
              name="search"
              id="Search-input"
              value={searchData.searchValue}
              placeholder="Search for products, brands and more"
              onChange={(event) => {
                dispatch(setFilterProducts(event.target.value));
              }}
              autoComplete="off"
            />
            {searchData.style.display === "flex" ? (
              <button
                id="search-image-btn"
                onClick={() => {
                  dispatch(deleteSearchValue());
                }}
              >
                <img src={Cross} alt="C" />
              </button>
            ) : (
              <button id="search-image-btn">
                <img src={Search} alt="S" />
              </button>
            )}
            <div
              id="recent-search-div"
              style={{ display: searchData.style.display }}
            >
              {searchData.filterItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="recent-search-items"
                    onClick={() => dispatch(selectProduct())}
                  >
                    <NavLink to={`/productPage/${item.index}`}>
                      <img
                        src={item.thumbnail}
                        // src="https://rukminim1.flixcart.com/www/100/100/promos/20/07/2022/e13f8f3a-0de2-44f1-b532-258ee7f23147.png?q=90"
                        alt={item.name}
                      />
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </div>
          </div>

          {/* Login-button  */}
          {loginData === "" ? (
            <div
              className="login-link navbar-class"
              onClick={() => {
                dispatch(setLoginDisplay());
              }}
            >
              <div className="login-btn" style={{ outline: "none" }}>
                Login
              </div>
            </div>
          ) : (
            <div className="login-link navbar-class">
              <div className="login-btn" style={{ background: "transparent" }}>
                <img
                  src={User_icon}
                  alt=""
                  style={{ width: "1.15rem", height: "1.15rem" }}
                />
                <span
                  style={{
                    color: "white",
                    marginLeft: "0.3rem",
                    fontWeight: "normal",
                    fontSize: "0.9rem",
                    textTransform: "capitalize",
                    width: "fit-content",
                    height: "1rem",
                  }}
                >
                  {loginData}
                </span>
              </div>
              <div className="login-hover">
                <img className="triangle-img" src={Triangle_icon} alt="" />
                <li
                  className="login-hover-items"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  <span>Log out</span>
                </li>
              </div>
            </div>
          )}

          {/* More  */}
          <div id="more" className="navbar-class">
            <div name="more" id="moreOption">
              <img src={More_Icon} alt="" />
              <span>More</span>
              <svg
                width="4.7"
                height="8"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
                className="zZ3yfL"
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#fff"
                  className="_2gTTdy"
                ></path>
              </svg>
            </div>
            <div className="moreOption-hover">
              <img className="triangle-img" src={Triangle_icon} alt="" />
              <li className="moreOption-items">
                <a href="https://www.flipkart.com/helpcentre">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className=""
                    viewBox="0 0 14 17"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        fill="#2874F0"
                        fillRule="nonzero"
                        d="M12.25.542H1.75c-.833 0-1.5.675-1.5 1.5v10.5c0 .825.667 1.5 1.5 1.5h3L7 16.292l2.25-2.25h3c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5zm-4.5 12h-1.5v-1.5h1.5v1.5zM9.303 6.73l-.676.69c-.54.547-.877.997-.877 2.122h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.646.443-1.058 0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5H4c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .66-.27 1.26-.697 1.687z"
                      ></path>
                    </g>
                  </svg>
                  <span>24x7 Customer Care</span>
                </a>
              </li>
              <li className="moreOption-items">
                <a href="https://www.flipkart.com/mobile-apps?otracker=ch_vn_mobile_apps">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    className=""
                    viewBox="0 0 12 14"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M-4-3h20v20H-4z"></path>
                      <path
                        fill="#2874F0"
                        fillRule="nonzero"
                        d="M12 4.94H8.57V0H3.43v4.94H0l6 5.766 6-5.765zM0 12.354V14h12v-1.647H0z"
                      ></path>
                    </g>
                  </svg>
                  <span>Download App</span>
                </a>
              </li>
            </div>
          </div>

          {/* Cart  */}
          <NavLink style={{ outline: "none" }} to="/cartPage">
            <div id="cart-link" className="navbar-class">
              {cartData.length >= 1 ? (
                <span className="cartCount">{cartData.length}</span>
              ) : null}
              <img id="cart-image" src={Cart} alt="C" />
              <span id="cart-text">Cart</span>
            </div>
          </NavLink>
        </section>
        <LoginPage />
      </nav>
    </>
  );
};

export default Navbar;
