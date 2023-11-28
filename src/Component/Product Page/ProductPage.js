import React, { useEffect } from "react";
import "../Product Page/CSS/ProductPage.css";
import Footer from "../Home Page/Footer";
import Buy_Now from "../Navbar Icons/buy-now-icon.png";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSingleProduct,
  selectProductImage,
  selectProductColor,
} from "../../Redux/Slices/ProductSlice";
import ProductData from "../../Data/Products.json";
import { setCartProduct } from "../../Redux/Slices/CartSlice";
import { setBuyProduct } from "../../Redux/Slices/PaymentSlice";

const ProductPage = () => {
  const { id } = useParams();

  const singleData = useSelector((state) => {
    return state.Slice3;
  });

  const cartData = useSelector((state) => {
    return state.Slice5.cartProducts;
  });

  const loginData = useSelector((state) => {
    return state.Slice6;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSingleProduct(ProductData[id]));
  }, [id, dispatch]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartData));
  }, []);

  return (
    <>
      <section id="product-page">
        <section id="product-page-box">
          <aside className="left-product-page">
            <div className="left-product-page-img-section">
              <div className="left-product-page-imgList">
                {singleData.productImages.map((img, index, arr) => {
                  return (
                    <div
                      key={index}
                      className="left-product-page-imgList-item "
                      style={
                        img === singleData.productImg
                          ? { border: "0.12rem solid #2e78f0" }
                          : undefined
                      }
                      onClick={() => dispatch(selectProductImage(img))}
                    >
                      <img
                        className="left-product-page-imgList-item-img"
                        src={img}
                        alt={arr.name}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="left-product-page-img-div">
                <img
                  className="left-product-page-img"
                  src={singleData.productImg}
                  alt={singleData.singleProduct.name}
                />
              </div>
            </div>
            <div className="left-product-page-order-btn-section">
              <NavLink
                to={`/cartPage`}
                onClick={() => {
                  if (cartData.includes(ProductData[id]) === true) {
                    return null;
                  } else {
                    dispatch(setCartProduct(ProductData[id]));
                  }
                }}
              >
                <div className="left-product-page-cart-btn">
                  <span>
                    <svg
                      className="_1KOMV2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className=""
                        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ marginLeft: "4px", color: "white" }}>
                    {cartData.includes(ProductData[id]) === true
                      ? " GO"
                      : " ADD"}{" "}
                    TO CART
                  </span>
                </div>
              </NavLink>

              {loginData.saveLoginInfo == [] ? (
                <div
                  className="left-product-page-buy-btn"
                  style={{ background: "grey" }}
                >
                  <span>
                    <img src={Buy_Now} alt="" />
                  </span>
                  <span style={{ color: "white" }}> BUY NOW</span>
                </div>
              ) : (
                <NavLink to={"/paymentPage"}>
                  <div
                    className="left-product-page-buy-btn"
                    onClick={() => {
                      dispatch(setBuyProduct([ProductData[id]]));
                    }}
                  >
                    <span>
                      <img src={Buy_Now} alt="" />
                    </span>
                    <span style={{ color: "white" }}> BUY NOW</span>
                  </div>
                </NavLink>
              )}
            </div>
          </aside>

          <aside className="right-product-page">
            <div className="right-product-page-div">
              <div className="right-product-page-productName">
                <p>{singleData.singleProduct.name}</p>
              </div>
              <div className="right-product-page-productRatings">
                <span className="right-product-page-productRatings-box">
                  {singleData.singleProduct.ratingStar}★
                </span>
                <span>
                  {singleData.singleProduct.ratingCount} Ratings &{" "}
                  {singleData.singleProduct.review} Reviews
                </span>

                {singleData.singleProduct.review < 40 ? null : (
                  <span className="flipkart-assured-img-div">
                    <img
                      className="flipkart-assured-img"
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                      alt=""
                    />
                  </span>
                )}
              </div>
              <div className="right-product-page-price-section">
                <div className="right-product-page-productPrice-div">
                  <span className="right-product-page-discountPrice">
                    <del>&#8377;{singleData.singleProduct.discountPrice}</del>
                  </span>
                  <span className="right-product-page-realPrice">
                    &#8377;{singleData.singleProduct.originalPrice}
                  </span>
                  <span className="right-product-page-discountPercentage">
                    {singleData.singleProduct.discountPercentage}% off
                  </span>
                </div>
                <div className="right-product-page-packaging">
                  +&#8377;69 Secured Packaging Fee
                </div>
              </div>
              <div className="right-product-page-description">
                {singleData.productDescription.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </div>
              <div className="right-product-page-warranty">
                <div className="right-product-page-warranty-companyImg-div">
                  <img
                    className="right-product-page-warranty-companyImg"
                    src={singleData.singleProduct.companyLogo}
                    alt={singleData.singleProduct.name}
                  />
                </div>
                <div className="right-product-page-warranty-para">
                  1 Year Warranty for Phone and 6 Months for In-Box Accessories
                </div>
              </div>
              <div className="right-product-page-color">
                <div className="right-product-page-color-title">
                  <p>Color</p>
                </div>
                <div className="right-product-page-chooseColor-div">
                  {singleData.productColors.map((color, index) => {
                    return (
                      <button
                        key={index}
                        id={color}
                        className={
                          color === singleData.productColor
                            ? "right-product-page-chooseColor active"
                            : "right-product-page-chooseColor"
                        }
                        style={{
                          backgroundColor: color,
                        }}
                        onClick={() => dispatch(selectProductColor(color))}
                      ></button>
                    );
                  })}
                </div>
              </div>
              <div className="right-product-page-order-btn-section">
                <NavLink to={"/cartPage"}>
                  <div
                    className="right-product-page-cart-btn"
                    onClick={() => {
                      if (cartData.includes(ProductData[id]) === true) {
                        return null;
                      } else {
                        dispatch(setCartProduct(ProductData[id]));
                      }
                    }}
                  >
                    <span>
                      <svg
                        className="_1KOMV2"
                        width="16"
                        height="16"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className=""
                          d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                          fill="#fff"
                        ></path>
                      </svg>
                    </span>
                    <span style={{ marginLeft: "4px", color: "white" }}>
                      {cartData.includes(ProductData[id]) === true
                        ? " GO"
                        : " ADD"}{" "}
                      TO CART
                    </span>
                  </div>
                </NavLink>

                {loginData.saveLoginInfo == [] ? (
                  <div className="right-product-page-buy-btn">
                    <span>
                      <img src={Buy_Now} alt="" />
                    </span>
                    <span style={{ color: "white" }}> BUY NOW</span>
                  </div>
                ) : (
                  <NavLink to={"/paymentPage"}>
                    <div
                      className="right-product-page-buy-btn"
                      onClick={() => {
                        dispatch(setBuyProduct(ProductData[id]));
                      }}
                    >
                      <span>
                        <img src={Buy_Now} alt="" />
                      </span>
                      <span style={{ color: "white" }}> BUY NOW</span>
                    </div>
                  </NavLink>
                )}
              </div>
            </div>
          </aside>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;
