import React from "react";
import "./CSS/ProductNotFound.css";

const ProductNotFound = () => {
  return (
    <>
      <div className="productNotFound-contentDiv">
        <div className="productNotFound-imgDiv">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png"
            alt=""
          />
        </div>
        <div className="productNotFound-textDiv">
          <p className="productNotFound-sorryText">Sorry, no results found!</p>
          <p className="productNotFound-pleaseText">
            Please check the spelling or try searching for something else.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductNotFound;
