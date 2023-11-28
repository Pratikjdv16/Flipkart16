import React from "react";
import "../Filter Page/CSS/FilterPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  openBrandContainerAction,
  openRatingContainerAction,
  openCategoryContainerAction,
  openDiscountContainerAction,
  openSortAction,
  closeSortAction,
  setSortProducts,
  setMinPriceFilter,
  setMaxPriceFilter,
  setCategoryFilter,
  setBrandFilter,
  setRatingFilter,
  setDiscountFilter,
  setFiltersDisplay,
} from "../../Redux/Slices/ProductFilterSlice";
import Sort from "../Navbar Icons/sort-icon.png";
import Filter from "../Navbar Icons/filter-icon.png";
import Cross from "../Navbar Icons/cross2-icon.png";
import Filters from "./Filters";

const FilterPage = () => {
  const styleData = useSelector((state) => {
    return state.Slice2.style;
  });

  const filterData = useSelector((state) => {
    return state.Slice2.filterProductItem;
  });

  const filterState = useSelector((state) => {
    return state.Slice2.filterPageState;
  });

  const sortData = useSelector((state) => {
    return state.Slice2.sortItemActive;
  });

  const dispatch = useDispatch();

  const getSortItem = (event) => {
    dispatch(setSortProducts(event.target.htmlFor));
  };

  return (
    <>
      <section id="filter">
        <section id="filterBox">
          {/* <!-- Price-Container --> */}
          <div className="price-container">
            <div className="price-container-name">PRICE</div>
            <div className="price-container-range">
              <input
                type="range"
                min="0"
                max={filterState.maxPrice}
                value={filterState.maxPriceRange}
                // step="6"
                list="values"
                readOnly
              />
              <datalist id="values">
                <option value="100000"></option>
                <option value="80000"></option>
                <option value="60000"></option>
                <option value="40000"></option>
              </datalist>
            </div>
            <div className="price-container-min-to-max">
              <select
                id="min"
                name="min"
                value={filterState.minPrice}
                onChange={(event) => {
                  dispatch(setMinPriceFilter(event.target.value));
                }}
              >
                <option value="0">Min</option>
                <option value="15000">&#8377;15000</option>
                <option value="30000">&#8377;30000</option>
                <option value="45000">&#8377;45000</option>
              </select>
              <span style={{ color: "grey" }}>to</span>
              <select
                id="max"
                name="max"
                value={filterState.maxPrice}
                onChange={(event) => {
                  dispatch(setMaxPriceFilter(event.target.value));
                }}
              >
                <option value="100000">&#8377;100000+</option>
                <option value="90000">&#8377;90000</option>
                <option value="75000">&#8377;75000</option>
                <option value="60000">&#8377;60000</option>
              </select>
            </div>
          </div>

          {/* <!-- Category-Container --> */}
          <div className="category-container">
            <div
              className="container-name"
              onClick={() => {
                dispatch(openCategoryContainerAction());
              }}
            >
              <div className="container-name-text">category</div>
              <span className="container-name-arrow">
                <svg
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  style={{ transform: styleData.CategoryTransform }}
                >
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="grey"
                    className="FXox6K"
                  ></path>
                </svg>
              </span>
            </div>
            {filterData.productCategory.map((value, index) => {
              return (
                <div
                  key={index}
                  className="category-container-select"
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

          {/* <!-- Brand-Container --> */}
          <div className="brand-container">
            <div
              className="container-name"
              onClick={() => {
                dispatch(openBrandContainerAction());
              }}
            >
              <div className="container-name-text">BRAND</div>
              <span className="container-name-arrow">
                <svg
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  className="zZ3yfL"
                  style={{ transform: styleData.BrandTransform }}
                >
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="grey"
                    className="_2gTTdy"
                  ></path>
                </svg>
              </span>
            </div>
            {filterData.productCompany.map((value, index) => {
              return (
                <div
                  key={index}
                  className="brand-container-select"
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

          {/* <!-- Customer-Rating-Container --> */}
          <div className="rating-container">
            <div
              className="container-name"
              onClick={() => {
                dispatch(openRatingContainerAction());
              }}
            >
              <div className="container-name-text">CUSTOMER RATINGS</div>
              <span className="container-name-arrow">
                <svg
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  style={{ transform: styleData.RatingTransform }}
                >
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="grey"
                    className="FXox6K"
                  ></path>
                </svg>
              </span>
            </div>
            <div
              className="rating-container-select"
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
              className="rating-container-select"
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
              className="rating-container-select"
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
              className="rating-container-select"
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

          {/* <!-- Discount-Container --> */}
          <div className="discount-container">
            <div
              className="container-name"
              onClick={() => {
                dispatch(openDiscountContainerAction());
              }}
            >
              <div className="container-name-text">DISCOUNT</div>
              <span className="container-name-arrow">
                <svg
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  style={{ transform: styleData.DiscountTransform }}
                >
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="grey"
                    className="FXox6K"
                  ></path>
                </svg>
              </span>
            </div>
            <div
              className="discount-container-select"
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
              className="discount-container-select"
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
              className="discount-container-select"
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
              className="discount-container-select"
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
              className="discount-container-select"
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
        </section>

        <section id="filter-mobile-tablet-laptop-box">
          <div
            className="sort-box-btn"
            onClick={() => {
              dispatch(openSortAction());
            }}
          >
            <button>
              <img className="sort-box-btn-img" src={Sort} alt="" />
              Sort
            </button>
          </div>
          <div className="filter-box-btn">
            <button
              onClick={() => {
                dispatch(setFiltersDisplay());
              }}
            >
              <img className="filter-box-btn-img" src={Filter} alt="" />
              Filters
            </button>
          </div>
        </section>

        {/* Sort Section */}
        <section id="sort-section">
          <div className="sort-section-text">
            <p>Sort By</p>
          </div>
          <div className="sort-item-box">
            <div
              className="sort-items"
              style={{
                borderBottom: sortData.popularityBorderBottom,
              }}
            >
              <label
                htmlFor="popularity"
                style={{ color: sortData.popularityColor }}
                onClick={getSortItem}
              >
                Popularity
              </label>
            </div>
            <div
              className="sort-items"
              style={{
                borderBottom: sortData.low_highBorderBottom,
              }}
            >
              <label
                htmlFor="low_high"
                style={{ color: sortData.low_highColor }}
                onClick={getSortItem}
              >
                Price -- Low to High
              </label>
            </div>
            <div
              className="sort-items"
              style={{
                borderBottom: sortData.high_lowBorderBottom,
              }}
            >
              <label
                htmlFor="high_low"
                style={{ color: sortData.high_lowColor }}
                onClick={getSortItem}
              >
                Price -- High to Low
              </label>
            </div>
            <div
              className="sort-items"
              style={{
                borderBottom: sortData.newBorderBottom,
              }}
            >
              <label
                htmlFor="new"
                style={{ color: sortData.newColor }}
                onClick={getSortItem}
              >
                Newest First
              </label>
            </div>
          </div>
        </section>

        {/* Sort Section for mobile-laptop-tablet */}
        <section
          id="mobile-tablet-laptop-sort-section"
          style={{ display: styleData.SortDisplay }}
        >
          <div className="mobile-tablet-laptop-sort-section-text">
            <p>SORT BY</p>
            <div
              onClick={() => {
                dispatch(closeSortAction());
              }}
            >
              <img src={Cross} alt="" />
            </div>
          </div>
          <div className="mobile-tablet-laptop-sort-item-box">
            <div className="mobile-tablet-laptop-sort-items">
              <label htmlFor="popularity" onClick={getSortItem}>
                Popularity
              </label>
              <input type="radio" name="sort" id="popularity" />
            </div>
            <div className="mobile-tablet-laptop-sort-items">
              <label htmlFor="low_high" onClick={getSortItem}>
                Price -- Low to High
              </label>
              <input type="radio" name="sort" id="low_high" />
            </div>
            <div className="mobile-tablet-laptop-sort-items">
              <label htmlFor="high_low" onClick={getSortItem}>
                Price -- High to Low
              </label>
              <input type="radio" name="sort" id="high_low" />
            </div>
            <div className="mobile-tablet-laptop-sort-items">
              <label htmlFor="new" onClick={getSortItem}>
                Newest First
              </label>
              <input type="radio" name="sort" id="new" />
            </div>
          </div>
        </section>
      </section>
      <Filters />
    </>
  );
};

export default FilterPage;
