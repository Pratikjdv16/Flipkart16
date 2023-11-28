import React, { useEffect } from "react";
import FilterPage from "./FilterPage";
import ProductList2 from "./ProductList2";
import "../Filter Page/CSS/ProductFilterPage.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilterProducts } from "../../Redux/Slices/ProductFilterSlice";
import ProductData from "../../Data/Products.json";
import Footer from "../Home Page/Footer";
import ProductNotFound from "../Error/ProductNotFound";

const ProductFilterPage = () => {
  const filterData = useSelector((state) => {
    return state.Slice2.filterProductList2;
  });

  const cartData = useSelector((state) => {
    return state.Slice5.cartProducts;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilterProducts(ProductData));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <>
      <section id="productFilter">
        {filterData.length === 0 ? (
          <section id="productFilterBox">
            <ProductNotFound />
          </section>
        ) : (
          <section id="productFilterBox">
            <FilterPage />
            <ProductList2 filterData={filterData} />
          </section>
        )}
      </section>
      <Footer />
    </>
  );
};

export default ProductFilterPage;
