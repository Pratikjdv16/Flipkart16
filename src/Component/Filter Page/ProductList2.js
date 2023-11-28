import React from "react";
import "../Filter Page/CSS/ProductList2.css";
import { NavLink } from "react-router-dom";

const ProductList2 = ({ filterData }) => {
  return (
    <>
      <section id="product-list2">
        {filterData.map((filterProducts, index) => {
          return (
            <div key={index}>
              <section id="product-list2-box">
                <div className="product-list2-left-div">
                  <NavLink to={`/productPage/${filterProducts.index}`}>
                    <div className="product-list2-img-div">
                      <img
                        className="product-list2-img"
                        src={filterProducts.thumbnail}
                        alt={filterProducts.name}
                      />
                    </div>
                  </NavLink>
                </div>
                <div className="product-list2-middle-div">
                  <NavLink to={`/productPage/${filterProducts.index}`}>
                    <div className="product-list2-productName">
                      <p>{filterProducts.name}</p>
                    </div>
                  </NavLink>
                  <div className="product-list2-productRatings">
                    <span className="product-list2-productRatings-box">
                      {filterProducts.ratingStar}★
                    </span>
                    <span>
                      {filterProducts.ratingCount} Ratings &{" "}
                      {filterProducts.review} Reviews
                    </span>
                  </div>
                  <div className="product-list2-description">
                    {filterProducts.description.map((value, index) => {
                      return <li key={index}>{value}</li>;
                    })}
                  </div>
                </div>
                <div className="product-list2-right-div">
                  <div className="product-list2-right-top-div">
                    <div className="product-list2-productPrice-div">
                      <p className="product-list2-discountPrice">
                        &#8377;{filterProducts.discountPrice}
                      </p>

                      <div className="product-list2-price-discountPer-para">
                        <span className="product-list2-realPrice">
                          &#8377;{filterProducts.originalPrice}
                        </span>
                        <span className="product-list2-discountPercentage">
                          {filterProducts.discountPercentage}% off
                        </span>
                      </div>

                      <span className="product-list2-delivery">
                        Free delivery
                      </span>
                    </div>
                    {filterProducts.review < 40 ? null : (
                      <div className="product-list2-flipkart-assured-img-div">
                        <img
                          className="product-list2-flipkart-assured-img"
                          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                  <div className="product-list2-right-bottom-div">
                    <div className="product-list2-exchange-para">
                      Upto{" "}
                      <span className="product-list2-exchange-price">
                        &#8377;{filterProducts.exchangePrice}
                      </span>{" "}
                      on Exchange
                    </div>
                    <div className="product-list2-bank-offer">Bank Offer</div>
                  </div>
                </div>
              </section>
              <section id="product-list2-mobile-tablet-laptop-box">
                <div className="product-list2-mobile-tablet-laptop-left-div">
                  <NavLink to={`/productPage/${filterProducts.index}`}>
                    <div className="product-list2-mobile-tablet-laptop-img-div">
                      <img
                        className="product-list2-mobile-tablet-laptop-img"
                        src={filterProducts.thumbnail}
                        alt={filterProducts.name}
                      />
                    </div>
                  </NavLink>
                </div>
                <div className="product-list2-mobile-tablet-laptop-middle-div">
                  <NavLink to={`/productPage/${filterProducts.index}`}>
                    <div className="product-list2-mobile-tablet-laptop-productName">
                      <p>{filterProducts.name}</p>
                    </div>
                  </NavLink>
                  <div className="product-list2-mobile-tablet-laptop-productInfo-productRatings">
                    <span className="product-list2-mobile-tablet-laptop-productRatings-box">
                      {filterProducts.ratingStar}★
                    </span>
                    <span>
                      {filterProducts.ratingCount} Ratings &{" "}
                      {filterProducts.review} Reviews
                    </span>
                    {filterProducts.review < 40 ? null : (
                      <span className="product-list2-flipkart-assured-img-div">
                        <img
                          className="product-list2-flipkart-assured-img"
                          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                          alt=""
                        />
                      </span>
                    )}
                  </div>
                  <div className="product-list2-mobile-tablet-laptop-productInfo-price-section">
                    <div className="product-list2-mobile-tablet-laptop-productInfo-productPrice-div">
                      <span className="product-list2-mobile-tablet-laptop-productInfo-discountPercentage">
                        {filterProducts.discountPercentage}% off
                      </span>
                      <span className="product-list2-mobile-tablet-laptop-productInfo-realPrice">
                        &#8377;{filterProducts.originalPrice}
                      </span>
                      <span className="product-list2-mobile-tablet-laptop-productInfo-discountPrice">
                        &#8377;{filterProducts.discountPrice}
                      </span>
                    </div>
                  </div>
                  <div className="product-list2-mobile-tablet-laptop-description">
                    {filterProducts.description.map((value, index) => {
                      return <li key={index}>{value}</li>;
                    })}
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductList2;
