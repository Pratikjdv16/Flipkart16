import React, { useEffect } from "react";
import "../Cart Page/CSS/CartPage.css";
import Footer from "../Home Page/Footer";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Save_icon from "../Navbar Icons/download-icon.png";
import Remove_icon from "../Navbar Icons/delete-icon.png";
import {
  incrementProductQuantity,
  decrementProductQuantity,
  setTotalPrice,
  setRemovePopUp,
} from "../../Redux/Slices/CartSlice";
import PopUpPage from "../PopUp/PopUpPage";
import { setBuyProduct } from "../../Redux/Slices/PaymentSlice";

const CartPage = () => {
  const cartData = useSelector((state) => {
    return state.Slice5.cartProducts;
  });

  const priceData = useSelector((state) => {
    return state.Slice5.priceData;
  });

  const removePopUp = useSelector((state) => {
    return state.Slice5.removePopUp;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTotalPrice());
  }, [dispatch, cartData]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartData));
  }, []);

  return (
    <>
      <section id="cart">
        {cartData.length === 0 ? (
          <section id="emptyCart-box">
            <div className="emptyCart-sections-div">
              <div className="emptyCart-div-flipkart-section">
                <div className="emptyCart-div-flipkart-text">Flipkart</div>
              </div>
              <div className="emptyCart-div-grocery-section">
                <div className="emptyCart-div-grocery-text">Grocery</div>
              </div>
            </div>
            <div className="emptyCart-contentDiv">
              <div className="emptyCart-imgDiv">
                <img
                  src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                  alt=""
                />
              </div>
              <div className="emptyCart-textDiv">
                <p className="emptyCart-text">Your cart is empty!</p>
                <p className="addItem-text">Add items to it now</p>
              </div>
              <NavLink to={"/productFilterPage"}>
                <div className="emptyCart-btnDiv">
                  <button>Shop Now</button>
                </div>
              </NavLink>
            </div>
          </section>
        ) : (
          <section id="cartBox">
            <div className="cart-left-div">
              <div className="cart-left-sections-div">
                <div className="cart-left-div-flipkart-section">
                  <div className="cart-left-div-flipkart-text">
                    Flipkart{" "}
                    {cartData.length === 0 ? null : ` (${cartData.length})`}
                  </div>
                </div>
                <div className="cart-left-div-grocery-section">
                  <div className="cart-left-div-grocery-text">Grocery</div>
                </div>
              </div>

              <div className="cart-left-saveAddress-div">
                <div className="cart-left-addressText">
                  From saved Addresses
                </div>
                <div>
                  <button className="cart-left-deliveryPincode">
                    Enter Delivery Pincode
                  </button>
                </div>
              </div>

              {cartData.map((item, index) => {
                return (
                  <div key={index} className="cart-left-productInfo-div">
                    <div className="cart-left-productInfo-productSection">
                      <NavLink to={`/productPage/${item.index}`}>
                        <div className="cart-left-productInfo-img-div">
                          <img
                            className="cart-left-productInfo-img"
                            src={item.thumbnail}
                            alt={item.name}
                          />
                        </div>
                      </NavLink>
                      <NavLink to={`/productPage/${item.index}`}>
                        <div className="cart-left-productInfo">
                          <div className="cart-left-productInfo-productName">
                            <p>{item.name}</p>
                          </div>
                          <div className="cart-left-productInfo-productRatings">
                            <span>Seller.BTPLD</span>
                            <span className="flipkart-assured-img-div">
                              <img
                                className="flipkart-assured-img"
                                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="cart-left-productInfo-price-section">
                            <div className="cart-left-productInfo-productPrice-div">
                              <span className="cart-left-productInfo-realPrice">
                                &#8377;{item.originalPrice}
                              </span>
                              <span className="cart-left-productInfo-discountPrice">
                                &#8377;{item.discountPrice}
                              </span>
                              <span className="cart-left-productInfo-discountPercentage">
                                {item.discountPercentage}% off
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>

                    <div className="cart-left-productInfo-save-remove">
                      <span className="cart-left-productInfo-quantity">
                        <button
                          style={
                            item.quantity === 1
                              ? { color: "darkGrey" }
                              : { color: "#212121" }
                          }
                          onClick={() => {
                            dispatch(decrementProductQuantity(item.index));
                          }}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => {
                            console.log(item.index);
                            dispatch(incrementProductQuantity(item.index));
                          }}
                        >
                          +
                        </button>
                      </span>
                      <div className="cart-left-productInfo-save">
                        <img
                          style={{
                            width: "1.2rem",
                            height: "1.2rem",
                            marginRight: "0.2rem",
                          }}
                          src={Save_icon}
                          alt=""
                        />
                        <span>Save for later</span>
                      </div>

                      <div className="cart-left-productInfo-remove">
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
                            dispatch(setRemovePopUp(item.index));
                          }}
                        >
                          Remove
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="cart-left-productInfo-placeOrder">
                <NavLink to={"/paymentPage"}>
                  <button
                    className="cart-left-productInfo-placeOrder-btn"
                    onClick={() => {
                      dispatch(setBuyProduct(cartData));
                    }}
                  >
                    PLACE ORDER
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="cart-right-div">
              <div className="cart-right-priceDetails-section">
                <div className="cart-right-priceDetails-div">
                  <span>PRICE DETAILS</span>
                </div>
                <div className="cart-right-priceDetails-price">
                  <span className="">
                    Price
                    {cartData.length === 0
                      ? null
                      : ` (${cartData.length} item)`}
                  </span>
                  <span className="">
                    &#8377;{priceData.totalOriginalPrice}
                  </span>
                </div>
                <div className="cart-right-priceDetails-discount">
                  <span className="">Discount</span>
                  <span className="cart-right-priceDetails-discount-price">
                    -&#8377;{priceData.totalDiscountPrice}
                  </span>
                </div>
                <div className="cart-right-priceDetails-deliveryCharges">
                  <span className="">Delivery Charges </span>
                  <span className="cart-right-priceDetails-deliveryCharges-price">
                    Free
                  </span>
                </div>
                <div className="cart-right-priceDetails-totalAmount">
                  <span className="">Total Amount</span>
                  <span className="">&#8377;{priceData.totalPrice}</span>
                </div>
                <div className="cart-right-priceDetails-savePrice-para">
                  <span className="">
                    You will save &#8377;{priceData.totalDiscountPrice} on this
                    order
                  </span>
                </div>
              </div>
              <div className="cart-right-safe-secure-div">
                <img
                  className="cart-right-safe-secure-img"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg"
                  alt=""
                />
                <span className="cart-right-safe-secure-para">
                  Safe and Secure Payments.Easy returns.100% Authentic products.
                </span>
              </div>
            </div>

            {removePopUp === true ? (
              <PopUpPage
                heading="Remove Item"
                text="Are you sure you want to remove this Item?"
                btn1="Cancel"
                btn2="Remove"
              />
            ) : null}
          </section>
        )}
      </section>
      <Footer />
    </>
  );
};

export default CartPage;
