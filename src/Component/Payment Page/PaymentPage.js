import React, { useEffect } from "react";
import Error_icon from "../Navbar Icons/error-icon.png";
import "./CSS/PaymentPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decPaymentProductQuantity,
  incPaymentProductQuantity,
  confirmOrder,
  setCaptcha,
  setFormInfoError,
  setPaymentDisplay,
  setPaymentTotalPrice,
  setUserInfo,
  typeCaptcha,
  setCaptchaError,
  saveFormData,
  removePaymentProduct,
} from "../../Redux/Slices/PaymentSlice";
import { NavLink } from "react-router-dom";
import Remove_icon from "../Navbar Icons/delete-icon.png";
import RefreshCaptcha from "../Navbar Icons/refresh-icon.png";
import PopUpPage from "../PopUp/PopUpPage";

const PaymentPage = () => {
  const styleData = useSelector((state) => {
    return state.Slice7.style;
  });

  const paymentData = useSelector((state) => {
    return state.Slice7.buyProducts;
  });

  const paymentPriceData = useSelector((state) => {
    return state.Slice7.priceData;
  });

  const userFormData = useSelector((state) => {
    return state.Slice7.formData;
  });

  const formInfoError = useSelector((state) => {
    return state.Slice7.formError;
  });

  const captcha = useSelector((state) => {
    return state.Slice7.captcha;
  });

  const confirmation = useSelector((state) => {
    return state.Slice7.confirmation;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPaymentTotalPrice());
  }, [dispatch, paymentData]);

  useEffect(() => {
    localStorage.setItem("DeliveryProduct", JSON.stringify(paymentData));
  }, [paymentData]);

  return (
    <>
      <section id="payment">
        <section id="paymentBox">
          <div className="paymentInfo-div">
            {styleData.addressDisplay === true ? (
              <div>
                <div className="payment-editDiv-headingDiv">
                  <p className="payment-editDiv-heading">Delivery Address</p>
                </div>

                <div
                  className="address-editDiv"
                  style={{ background: "#f5faff" }}
                >
                  {/* Username */}
                  <div className="input-box">
                    <input
                      type="text"
                      id="userName"
                      className="inputField"
                      name="userName"
                      value={userFormData.userName}
                      placeholder="Name"
                      onChange={(event) =>
                        dispatch(
                          setUserInfo({
                            inputName: event.target.name,
                            value: event.target.value,
                          })
                        )
                      }
                      onBlur={() => dispatch(setFormInfoError("userName"))}
                      autoComplete="off"
                    />
                    {formInfoError.nameError === true ? (
                      <>
                        <img className="error_icon" src={Error_icon} alt="" />
                        <p>At least 3 characters</p>
                      </>
                    ) : null}
                  </div>

                  {/* Phone Number */}
                  <div className="input-box">
                    <input
                      type="text"
                      id="mobile_no"
                      className="inputField "
                      name="mobile_no"
                      value={userFormData.mobile_no}
                      placeholder="10-digit mobile number"
                      onChange={(event) =>
                        dispatch(
                          setUserInfo({
                            inputName: event.target.name,
                            value: event.target.value,
                          })
                        )
                      }
                      onBlur={() => dispatch(setFormInfoError("mobile_no"))}
                      autoComplete="off"
                    />
                    {formInfoError.mobileError === true ? (
                      <>
                        <img className="error_icon" src={Error_icon} alt="" />
                        <p>Not a valid phone number.</p>
                      </>
                    ) : null}
                  </div>

                  {/* PinCode */}
                  <div className="input-box">
                    <input
                      type="text"
                      id="pinCode"
                      name="pinCode"
                      className="inputField"
                      placeholder="Pincode"
                      value={userFormData.pinCode}
                      onChange={(event) =>
                        dispatch(
                          setUserInfo({
                            inputName: event.target.name,
                            value: event.target.value,
                          })
                        )
                      }
                      onBlur={() => dispatch(setFormInfoError("pinCode"))}
                      autoComplete="off"
                    />
                    {formInfoError.pinCodeError === true ? (
                      <>
                        <img className="error_icon" src={Error_icon} alt="" />
                        <p>Not a valid pincode.</p>
                      </>
                    ) : null}
                  </div>

                  {/* State */}
                  <div className="input-box">
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className="inputField"
                      placeholder="State"
                      value={userFormData.state}
                      onChange={(event) =>
                        dispatch(
                          setUserInfo({
                            inputName: event.target.name,
                            value: event.target.value,
                          })
                        )
                      }
                      onBlur={() => dispatch(setFormInfoError("state"))}
                      autoComplete="off"
                    />
                    {formInfoError.stateError === true ? (
                      <>
                        <img className="error_icon" src={Error_icon} alt="" />
                        <p>Not a valid state.</p>
                      </>
                    ) : null}
                  </div>

                  {/* City */}
                  <div className="input-box">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="inputField"
                      placeholder="City"
                      value={userFormData.city}
                      onChange={(event) =>
                        dispatch(
                          setUserInfo({
                            inputName: event.target.name,
                            value: event.target.value,
                          })
                        )
                      }
                      onBlur={() => dispatch(setFormInfoError("city"))}
                      autoComplete="off"
                    />
                    {formInfoError.cityError === true ? (
                      <>
                        <img className="error_icon" src={Error_icon} alt="" />
                        <p>Not a valid city.</p>
                      </>
                    ) : null}
                  </div>

                  {/* Locality */}
                  <div className="input-box">
                    <input
                      type="text"
                      id="locality"
                      name="locality"
                      className="inputField"
                      placeholder="Locality"
                      value={userFormData.locality}
                      onChange={(event) =>
                        dispatch(
                          setUserInfo({
                            inputName: event.target.name,
                            value: event.target.value,
                          })
                        )
                      }
                      onBlur={() => dispatch(setFormInfoError("locality"))}
                      autoComplete="off"
                    />
                    {formInfoError.localityError === true ? (
                      <>
                        <img className="error_icon" src={Error_icon} alt="" />
                        <p>Please fill out this field.</p>
                      </>
                    ) : null}
                  </div>

                  {/* Address */}
                  <div className="addressBox">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="address inputField"
                      placeholder="Address"
                      value={userFormData.address}
                      onChange={(event) =>
                        dispatch(
                          setUserInfo({
                            inputName: event.target.name,
                            value: event.target.value,
                          })
                        )
                      }
                      onBlur={() => dispatch(setFormInfoError("address"))}
                      autoComplete="off"
                    />
                    {formInfoError.addressError === true ? (
                      <>
                        <img className="error_icon" src={Error_icon} alt="" />
                        <p>Please fill out this field.</p>
                      </>
                    ) : null}
                  </div>

                  {/* Save */}
                  <div className="btnBox input-box">
                    <button
                      className="save"
                      onClick={() => dispatch(saveFormData())}
                    >
                      Save and Delivery Here
                    </button>
                  </div>

                  {/* Cancel */}
                  <div className="btnBox input-box">
                    <button
                      className="cancel"
                      onClick={() => {
                        dispatch(setPaymentDisplay("address"));
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="payment-section">
                <div className="payment-leftDiv">
                  <p className="payment-heading">Delivery Address</p>
                  <p className="payment-info">{userFormData.address}</p>
                </div>
                <div className="payment-rightDiv">
                  <button
                    onClick={() => {
                      dispatch(setPaymentDisplay("address"));
                    }}
                  >
                    Change
                  </button>
                </div>
              </div>
            )}

            {styleData.productListDisplay === true ? (
              <div>
                <div className="payment-editDiv-headingDiv">
                  <p className="payment-editDiv-heading">order summery</p>
                </div>

                <div className="payment-editDiv">
                  {paymentData.map((item, index) => {
                    return (
                      <div key={index} className="payment-productInfo-div">
                        <div className="payment-productInfo-productSection">
                          <NavLink to={`/productPage/${item.index}`}>
                            <div className="payment-productInfo-img-div">
                              <img
                                className="payment-productInfo-img"
                                src={item.thumbnail}
                                alt={item.name}
                              />
                            </div>
                          </NavLink>
                          <NavLink to={`/productPage/${item.index}`}>
                            <div className="payment-productInfo">
                              <div className="payment-productInfo-productName">
                                <p>{item.name}</p>
                              </div>
                              <div className="payment-productInfo-productRatings">
                                <span>Seller.BTPLD</span>
                                <span className="flipkart-assured-img-div">
                                  <img
                                    className="flipkart-assured-img"
                                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                                    alt=""
                                  />
                                </span>
                              </div>
                              <div className="payment-productInfo-price-section">
                                <div className="payment-productInfo-productPrice-div">
                                  <span className="payment-productInfo-realPrice">
                                    &#8377;{item.originalPrice}
                                  </span>
                                  <span className="payment-productInfo-discountPrice">
                                    &#8377;{item.discountPrice}
                                  </span>
                                  <span className="payment-productInfo-discountPercentage">
                                    {item.discountPercentage}% off
                                  </span>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </div>

                        <div className="payment-productInfo-save-remove">
                          <span className="payment-productInfo-quantity">
                            <button
                              style={
                                item.quantity === 1
                                  ? { color: "darkGrey" }
                                  : { color: "#212121" }
                              }
                              onClick={() => {
                                dispatch(decPaymentProductQuantity(item.index));
                              }}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => {
                                dispatch(incPaymentProductQuantity(item.index));
                              }}
                            >
                              +
                            </button>
                          </span>

                          {paymentData.length === 1 ? null : (
                            <div className="payment-productInfo-remove">
                              <img
                                style={{
                                  width: "1.2rem",
                                  height: "1.2rem",
                                  marginRight: "0.2rem",
                                }}
                                src={Remove_icon}
                                alt=""
                              />
                              <span
                                onClick={() => {
                                  dispatch(removePaymentProduct(item.index));
                                }}
                              >
                                Remove
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="payment-productInfo-continue">
                  <button
                    className="payment-productInfo-continue-btn"
                    onClick={() => {
                      dispatch(setPaymentDisplay("productList"));
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : (
              <div className="payment-section">
                <div className="payment-leftDiv">
                  <p className="payment-heading">Order summery</p>
                  <p className="payment-info">{paymentData.length} Item</p>
                </div>
                <div className="payment-rightDiv">
                  <button
                    onClick={() => {
                      dispatch(setPaymentDisplay("productList"));
                    }}
                  >
                    Change
                  </button>
                </div>
              </div>
            )}

            {styleData.paymentDisplay === true ? (
              <div>
                <div className="payment-editDiv-headingDiv">
                  <p className="payment-editDiv-heading">payment options</p>
                </div>

                <div className="payment-editDiv">
                  <div className="payment-options">
                    <input type="radio" id="cashOnDelivery" />
                    <label
                      htmlFor="cashOnDelivery"
                      onClick={() => {
                        dispatch(setCaptcha());
                        dispatch(setPaymentDisplay("captcha"));
                      }}
                    >
                      Cash on Delivery
                    </label>
                  </div>
                  {styleData.captchaDisplay === true ? (
                    <div className="captchaDiv">
                      <p className="captcha-items">
                        {captcha.setCaptcha}
                        <img
                          src={RefreshCaptcha}
                          style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            dispatch(setCaptcha());
                          }}
                          alt=""
                        />
                      </p>

                      <div
                        className="captcha-inputBox"
                        style={{ marginBottom: "1rem" }}
                      >
                        <input
                          type="text"
                          className="captcha-items"
                          value={captcha.getCaptcha}
                          placeholder="Enter the characters"
                          onChange={(event) =>
                            dispatch(typeCaptcha(event.target.value))
                          }
                          onBlur={() => dispatch(setCaptchaError())}
                        />
                        {captcha.captchaError === true ? (
                          <>
                            <img
                              className="error_icon"
                              src={Error_icon}
                              alt=""
                            />
                            <p>Please fill out this field.</p>
                          </>
                        ) : null}
                      </div>

                      <div style={{ border: "none" }} className="captcha-items">
                        <form
                          action="https://formspree.io/f/xeqbpzbj"
                          method="POST"
                          autoComplete="off"
                        >
                          <div style={{ display: "none" }}>
                            <input
                              type="text"
                              name="userName"
                              value={userFormData.userName}
                            />
                            <input
                              type="text"
                              name="mobile_no"
                              value={userFormData.mobile_no}
                            />
                            <input
                              type="text"
                              name="pinCode"
                              value={userFormData.pinCode}
                            />
                            <input
                              type="text"
                              name="state"
                              value={userFormData.state}
                            />
                            <input
                              type="text"
                              name="city"
                              value={userFormData.city}
                            />
                            <input
                              type="text"
                              name="locality"
                              value={userFormData.locality}
                            />
                            <input
                              type="text"
                              name="address"
                              value={userFormData.address}
                            />
                            {/* Payment Products Details */}
                            {paymentData.map((item, index) => {
                              return (
                                <div key={index}>
                                  <input
                                    type="text"
                                    name={`Product(${index + 1}) Name`}
                                    value={item.name}
                                  />
                                  <input
                                    type="text"
                                    name={`Product(${index + 1}) Quantity`}
                                    value={item.quantity}
                                  />
                                </div>
                              );
                            })}
                            <input
                              type="text"
                              name={`Total Price`}
                              value={paymentPriceData.totalPrice}
                            />
                          </div>

                          {captcha.setCaptcha !== captcha.getCaptcha ? (
                            <button
                              className="captchaBtn"
                              style={{ background: "grey" }}
                            >
                              Conform Order
                            </button>
                          ) : (
                            <button
                              className="captchaBtn"
                              onSubmit={() => {
                                dispatch(confirmOrder());
                                dispatch(setPaymentDisplay("captcha"));
                              }}
                            >
                              Conform Order
                            </button>
                          )}
                        </form>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              <div
                className="payment-section"
                onClick={() => {
                  if (
                    confirmation.deliveryInfoConfirm === false &&
                    confirmation.deliveryProductConfirm === false
                  ) {
                  } else {
                    dispatch(setPaymentDisplay("payment"));
                  }
                }}
              >
                <p
                  className="payment-heading"
                  style={{ height: "1rem", marginBottom: "0rem" }}
                >
                  payment options
                </p>
              </div>
            )}
          </div>

          <div className="paymentPrice-div">
            <div className="payment-priceDetails-section">
              <div className="payment-priceDetails-div">
                <span>PRICE DETAILS</span>
              </div>
              <div className="payment-priceDetails-price">
                <span className="">
                  Price
                  {paymentData.length === 0
                    ? null
                    : ` (${paymentData.length} item)`}
                </span>
                <span className="">
                  &#8377;{paymentPriceData.totalOriginalPrice}
                </span>
              </div>
              <div className="payment-priceDetails-discount">
                <span className="">Discount</span>
                <span className="payment-priceDetails-discount-price">
                  -&#8377;{paymentPriceData.totalDiscountPrice}
                </span>
              </div>
              <div className="payment-priceDetails-deliveryCharges">
                <span className="">Delivery Charges </span>
                <span className="payment-priceDetails-deliveryCharges-price">
                  Free
                </span>
              </div>
              <div className="payment-priceDetails-totalAmount">
                <span className="">Amount Payable</span>
                <span className="">&#8377;{paymentPriceData.totalPrice}</span>
              </div>
              <div className="payment-priceDetails-savePrice-para">
                <span className="">
                  You will save &#8377;{paymentPriceData.totalDiscountPrice} on
                  this order
                </span>
              </div>
            </div>
            <div className="payment-safe-secure-div">
              <img
                className="payment-safe-secure-img"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg"
                alt=""
              />
              <span className="payment-safe-secure-para">
                Safe and Secure Payments.Easy returns.100% Authentic products.
              </span>
            </div>
          </div>

          {confirmation.orderSuccessPopUp === true ? (
            <PopUpPage
              heading="Order Successfully."
              text=""
              btn1=""
              btn2="OK"
            />
          ) : null}
        </section>
      </section>
    </>
  );
};

export default PaymentPage;
