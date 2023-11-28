import React, { useEffect } from "react";
import Section from "./Section";
import Slider from "./Slider";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../Redux/Slices/ProductListSlice";
import ProductData from "../../Data/Products.json";

const HomePage = () => {
  const data = useSelector((state) => {
    return state.Slice1.products;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(ProductData));
  }, [dispatch]);

  return (
    <>
      <Section />
      <Slider />
      <ProductList listName="Electronics" items={data} />
      <Footer />
    </>
  );
};

export default HomePage;
