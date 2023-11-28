import React from "react";
import "../Home Page/CSS/ProductList.css";
import { NavLink } from "react-router-dom";

const ProductList = ({ listName, items }) => {
  return (
    <>
      <section id="products-list">
        <section id="product-list-box">
          <aside id="left-aside-para">
            <p className="left-aside-para-text">Best of {listName}</p>
          </aside>

          <aside id="right-aside-product_List">
            {items.map((singleProduct, index) => {
              return (
                <div key={index} className="product">
                  <NavLink to="/productFilterPage">
                    <div className="product-img-div">
                      <img
                        className="product-img"
                        src={singleProduct.thumbnail}
                        alt={singleProduct.name}
                      />
                    </div>
                    <div className="product-caption">
                      <span>{singleProduct.name}</span>
                      <p className="product-price">
                        From &#8377;{singleProduct.originalPrice}
                      </p>
                      <p className="product-name">{singleProduct.company}</p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </aside>
        </section>
      </section>
    </>
  );
};

export default ProductList;
