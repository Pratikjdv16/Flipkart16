import React from "react";
import "../Filter Page/CSS/Filters.css";
import { useDispatch, useSelector } from "react-redux";
import {
  openPriceContainerAction,
  openBrandContainerAction,
  openRatingContainerAction,
  openCategoryContainerAction,
  openDiscountContainerAction,
  setPriceFilter,
  setCategoryFilter,
  setBrandFilter,
  setRatingFilter,
  setDiscountFilter,
  setFiltersDisplay,
} from "../../Redux/Slices/ProductFilterSlice";

const Filters = () => {
  const styleData = useSelector((state) => {
    return state.Slice2;
  });

  const filterData = useSelector((state) => {
    return state.Slice2.filterProductItem;
  });

  const dispatch = useDispatch();

  return (
    <>
      <section
        id="filters"
        style={{
          display: styleData.style.FiltersDisplay,
        }}
      >
        <section id="filters-headingBox">
          <div
            className="backBtn-div"
            onClick={() => {
              dispatch(setFiltersDisplay());
            }}
          >
            <div>
              <svg viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                ></path>
              </svg>
            </div>
          </div>
          <div className="filters-text-div">
            <p>Filters</p>
          </div>
        </section>

        <section id="filtersBox">
          {/* <!-- Filters-Container --> */}
          <div className="filters-container-name-box">
            {/* Price */}
            <div
              id="filters-price-name"
              className="filters-container-name"
              onClick={() => {
                dispatch(openPriceContainerAction());
              }}
              style={{ background: styleData.style.PriceBgColor }}
            >
              <p>PRICE</p>
            </div>
            {/* Category */}
            <div
              id="filters-category-name"
              className="filters-container-name"
              onClick={() => {
                dispatch(openCategoryContainerAction());
              }}
              style={{ background: styleData.style.CategoryBgColor }}
            >
              <p>CATEGORY</p>
            </div>
            {/* Brand */}
            <div
              id="filters-brand-name"
              className="filters-container-name"
              onClick={() => {
                dispatch(openBrandContainerAction());
              }}
              style={{ background: styleData.style.BrandBgColor }}
            >
              <p>BRAND</p>
            </div>
            {/* Rate */}
            <div
              id="filters-rating-name"
              className="filters-container-name"
              onClick={() => {
                dispatch(openRatingContainerAction());
              }}
              style={{ background: styleData.style.RatingBgColor }}
            >
              <p>CUSTOMER RATINGS</p>
            </div>
            {/* Discount */}
            <div
              id="filters-discount-name"
              className="filters-container-name"
              onClick={() => {
                dispatch(openDiscountContainerAction());
              }}
              style={{ background: styleData.style.DiscountBgColor }}
            >
              <p>DISCOUNT</p>
            </div>
          </div>

          {/* <!-- Filters-Container-Select --> */}
          <div className="filters-container-select-box">
            {/* Price */}
            <div
              id="filters-price-select"
              className="filters-container-select"
              style={{
                display: styleData.style.PriceDisplay,
              }}
            >
              <div className="container-select-item">
                <input
                  type="radio"
                  id="ninetyThousand-and-above"
                  name="price"
                />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="ninetyThousand-and-above"
                  onClick={(event) => {
                    dispatch(setPriceFilter(event.target.htmlFor));
                  }}
                >
                  Rs. 90000 and Above
                </label>
              </div>
              <div className="container-select-item">
                <input
                  type="radio"
                  id="seventyThousand-ninetyThousand"
                  name="price"
                />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="seventyThousand-ninetyThousand"
                  onClick={(event) => {
                    dispatch(setPriceFilter(event.target.htmlFor));
                  }}
                >
                  Rs. 75000 - Rs. 90000
                </label>
              </div>
              <div className="container-select-item">
                <input
                  type="radio"
                  id="sixtyThousand-seventyThousand"
                  name="price"
                />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="sixtyThousand-seventyThousand"
                  onClick={(event) => {
                    dispatch(setPriceFilter(event.target.htmlFor));
                  }}
                >
                  Rs. 60000 - Rs. 75000
                </label>
              </div>
              <div className="container-select-item">
                <input
                  type="radio"
                  id="fortyFiveThousand-sixtyThousand"
                  name="price"
                />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="fortyFiveThousand-sixtyThousand"
                  onClick={(event) => {
                    dispatch(setPriceFilter(event.target.htmlFor));
                  }}
                >
                  Rs. 45000 - Rs. 60000
                </label>
              </div>
              <div className="container-select-item">
                <input
                  type="radio"
                  id="thirtyThousand-fortyFiveThousand"
                  name="price"
                />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="thirtyThousand-fortyFiveThousand"
                  onClick={(event) => {
                    dispatch(setPriceFilter(event.target.htmlFor));
                  }}
                >
                  Rs. 30000 - Rs. 45000
                </label>
              </div>
              <div className="container-select-item">
                <input
                  type="radio"
                  id="fifteenThousand-thirtyThousand"
                  name="price"
                />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="fifteenThousand-thirtyThousand"
                  onClick={(event) => {
                    dispatch(setPriceFilter(event.target.htmlFor));
                  }}
                >
                  Rs. 15000 - Rs. 30000
                </label>
              </div>
              <div className="container-select-item">
                <input
                  type="radio"
                  id="fifteenThousand-and-below"
                  name="price"
                />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="fifteenThousand-and-below"
                  onClick={(event) => {
                    dispatch(setPriceFilter(event.target.htmlFor));
                  }}
                >
                  Rs. 15000 and Below
                </label>
              </div>
            </div>

            {/* Category */}
            <div
              id="filters-category-select"
              className="filters-container-select"
              style={{ display: styleData.style.CategoryDisplay }}
            >
              {filterData.productCategory.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="container-select-item"
                    style={{ display: styleData.CategoryDisplay }}
                  >
                    {value === "All" ? (
                      <input
                        type="radio"
                        id={value}
                        name="category"
                        defaultChecked
                      />
                    ) : (
                      <input type="radio" id={value} name="category" />
                    )}
                    <label
                      style={{ marginLeft: "10px" }}
                      htmlFor={value}
                      onClick={(event) => {
                        dispatch(setCategoryFilter(event.target.htmlFor));
                      }}
                    >
                      {value}
                    </label>
                  </div>
                );
              })}
            </div>

            {/* Brand */}
            <div
              id="filters-brand-select"
              className="filters-container-select"
              style={{ display: styleData.style.BrandDisplay }}
            >
              {filterData.productCompany.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="container-select-item"
                    style={{ display: styleData.BrandDisplay }}
                  >
                    {value === "All" ? (
                      <input
                        type="radio"
                        id={value}
                        name="brand"
                        defaultChecked
                      />
                    ) : (
                      <input type="radio" id={value} name="brand" />
                    )}
                    <label
                      style={{ marginLeft: "10px" }}
                      htmlFor={value}
                      onClick={(event) => {
                        dispatch(setBrandFilter(event.target.htmlFor));
                        console.log("click");
                      }}
                    >
                      {value}
                    </label>
                  </div>
                );
              })}
            </div>

            {/* Rating */}
            <div
              id="filters-rating-select"
              className="filters-container-select"
              style={{ display: styleData.style.RatingDisplay }}
            >
              <div
                className="container-select-item"
                style={{ display: styleData.RatingDisplay }}
              >
                <input type="radio" id="four-star&above" name="rate" />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="four-star&above"
                  onClick={(event) => {
                    dispatch(setRatingFilter(event.target.htmlFor));
                  }}
                >
                  4★ & above
                </label>
              </div>
              <div
                className="container-select-item"
                style={{ display: styleData.RatingDisplay }}
              >
                <input type="radio" id="three-star&above" name="rate" />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="three-star&above"
                  onClick={(event) => {
                    dispatch(setRatingFilter(event.target.htmlFor));
                  }}
                >
                  3★ & above
                </label>
              </div>
              <div
                className="container-select-item"
                style={{ display: styleData.RatingDisplay }}
              >
                <input type="radio" id="two-star&above" name="rate" />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="two-star&above"
                  onClick={(event) => {
                    dispatch(setRatingFilter(event.target.htmlFor));
                  }}
                >
                  2★ & above
                </label>
              </div>
              <div
                className="container-select-item"
                style={{ display: styleData.RatingDisplay }}
              >
                <input type="radio" id="one-star&above" name="rate" />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="one-star&above"
                  onClick={(event) => {
                    dispatch(setRatingFilter(event.target.htmlFor));
                  }}
                >
                  1★ & above
                </label>
              </div>
            </div>

            {/* Discount */}
            <div
              id="filters-discount-select"
              className="filters-container-select"
              style={{ display: styleData.style.DiscountDisplay }}
            >
              <div
                className="container-select-item"
                style={{ display: styleData.DiscountDisplay }}
              >
                <input type="radio" id="fiftyPer_more" name="discount" />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="fiftyPer_more"
                  onClick={(event) => {
                    dispatch(setDiscountFilter(event.target.htmlFor));
                  }}
                >
                  50% or more
                </label>
              </div>
              <div
                className="container-select-item"
                style={{ display: styleData.DiscountDisplay }}
              >
                <input type="radio" id="fortyPer_more" name="discount" />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="fortyPer_more"
                  onClick={(event) => {
                    dispatch(setDiscountFilter(event.target.htmlFor));
                  }}
                >
                  40% or more
                </label>
              </div>
              <div
                className="container-select-item"
                style={{ display: styleData.DiscountDisplay }}
              >
                <input type="radio" id="thirtyPer_more" name="discount" />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="thirtyPer_more"
                  onClick={(event) => {
                    dispatch(setDiscountFilter(event.target.htmlFor));
                  }}
                >
                  30% or more
                </label>
              </div>
              <div
                className="container-select-item"
                style={{ display: styleData.DiscountDisplay }}
              >
                <input type="radio" id="twentyPer_more" name="discount" />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="twentyPer_more"
                  onClick={(event) => {
                    dispatch(setDiscountFilter(event.target.htmlFor));
                  }}
                >
                  20% or more
                </label>
              </div>
              <div
                className="container-select-item"
                style={{ display: styleData.DiscountDisplay }}
              >
                <input type="radio" id="tenPer_more" name="discount" />
                <label
                  style={{ marginLeft: "10px" }}
                  htmlFor="tenPer_more"
                  onClick={(event) => {
                    dispatch(setDiscountFilter(event.target.htmlFor));
                  }}
                >
                  10% or more
                </label>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Filters;
