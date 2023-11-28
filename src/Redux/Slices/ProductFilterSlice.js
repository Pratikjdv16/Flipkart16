import { createSlice } from "@reduxjs/toolkit";

const ProductFilterSlice = createSlice({
  name: "Slice2",
  initialState: {
    filterProducts: [],
    style: {
      PriceDisplay: "flex",
      BrandDisplay: "none",
      RatingDisplay: "none",
      CategoryDisplay: "none",
      DiscountDisplay: "none",
      PriceBgColor: "white",

      BrandBgColor: "transparent",
      RatingBgColor: "transparent",
      CategoryBgColor: "transparent",
      DiscountBgColor: "transparent",

      BrandTransform: "rotate(0deg) rotate(270deg)",
      RatingTransform: "rotate(0deg) rotate(270deg)",
      CategoryTransform: "rotate(0deg) rotate(270deg)",
      DiscountTransform: "rotate(0deg) rotate(270deg)",

      SortDisplay: "none",
      FiltersDisplay: "none",
    },
    sortValue: "",
    filterProductItem: {
      productCompany: [],
      productCategory: [],
    },
    filterProductList2: [], // for initial value set
    filterPageState: {
      minPrice: "0",
      maxPrice: "100000",
      maxPriceRange: "0",
      priceProducts: [],
      categoryProducts: [],
      brandProducts: [],
      rateProducts: [],
      discountProducts: [],
    },
    sortItemActive: {
      popularityColor: "black",
      low_highColor: "",
      high_lowColor: "",
      newColor: "",
      popularityBorderBottom: "",
      low_highBorderBottom: "",
      high_lowBorderBottom: "",
      newBorderBottom: "",
    },
  },
  reducers: {
    openPriceContainerAction: (state) => {
      state.style = {
        ...state.style,
        PriceDisplay: "flex",
        BrandDisplay: "none",
        RatingDisplay: "none",
        CategoryDisplay: "none",
        DiscountDisplay: "none",
        PriceBgColor: "white",
        BrandBgColor: "transparent",
        RatingBgColor: "transparent",
        CategoryBgColor: "transparent",
        DiscountBgColor: "transparent",
      };
    },

    openCategoryContainerAction: (state) => {
      switch (state.style.CategoryDisplay) {
        case "none":
          state.style = {
            ...state.style,
            PriceDisplay: "none",
            BrandDisplay: "none",
            RatingDisplay: "none",
            CategoryDisplay: "flex",
            DiscountDisplay: "none",
            PriceBgColor: "transparent",
            BrandBgColor: "transparent",
            RatingBgColor: "transparent",
            CategoryBgColor: "white",
            DiscountBgColor: "transparent",
            BrandTransform: "rotate(0deg) rotate(270deg)",
            RatingTransform: "rotate(0deg) rotate(270deg)",
            CategoryTransform: "rotate(0deg) rotate(90deg)",
            StockTransform: "rotate(0deg) rotate(270deg)",
            DiscountTransform: "rotate(0deg) rotate(270deg)",
          };

          let products = [
            "All",
            ...state.filterProducts.map((value) => {
              return value.category;
            }),
          ];
          state.filterProductItem.productCategory = products.filter(
            (value, index, arr) => {
              return arr.indexOf(value) === index;
            }
          );
          break;

        default:
          state.style = { ...state.style, CategoryDisplay: "none" };
          state.style.CategoryTransform = "rotate(0deg) rotate(270deg)";
          break;
      }
    },

    openBrandContainerAction: (state) => {
      switch (state.style.BrandDisplay) {
        case "none":
          state.style = {
            ...state.style,
            PriceDisplay: "none",
            BrandDisplay: "flex",
            RatingDisplay: "none",
            CategoryDisplay: "none",
            DiscountDisplay: "none",
            PriceBgColor: "transparent",
            BrandBgColor: "white",
            RatingBgColor: "transparent",
            CategoryBgColor: "transparent",
            DiscountBgColor: "transparent",
            BrandTransform: "rotate(0deg) rotate(90deg)",
            RatingTransform: "rotate(0deg) rotate(270deg)",
            CategoryTransform: "rotate(0deg) rotate(270deg)",
            DiscountTransform: "rotate(0deg) rotate(270deg)",
          };

          let products = [
            "All",
            ...state.filterProductList2.map((value) => {
              return value.company;
            }),
          ];
          state.filterProductItem.productCompany = products.filter(
            (value, index, arr) => {
              return arr.indexOf(value) === index;
            }
          );
          break;

        default:
          state.style = { ...state.style, BrandDisplay: "none" };
          state.style.BrandTransform = "rotate(0deg) rotate(270deg)";
          break;
      }
    },

    openRatingContainerAction: (state) => {
      switch (state.style.RatingDisplay) {
        case "none":
          state.style = {
            ...state.style,
            PriceDisplay: "none",
            BrandDisplay: "none",
            RatingDisplay: "flex",
            CategoryDisplay: "none",
            DiscountDisplay: "none",
            PriceBgColor: "transparent",
            BrandBgColor: "transparent",
            RatingBgColor: "white",
            CategoryBgColor: "transparent",
            DiscountBgColor: "transparent",
            BrandTransform: "rotate(0deg) rotate(270deg)",
            RatingTransform: "rotate(0deg) rotate(90deg)",
            CategoryTransform: "rotate(0deg) rotate(270deg)",
            DiscountTransform: "rotate(0deg) rotate(270deg)",
          };

          break;

        default:
          state.style = { ...state.style, RatingDisplay: "none" };
          state.style.RatingTransform = "rotate(0deg) rotate(270deg)";
          break;
      }
    },

    openDiscountContainerAction: (state) => {
      switch (state.style.DiscountDisplay) {
        case "none":
          state.style = {
            ...state.style,
            PriceDisplay: "none",
            BrandDisplay: "none",
            RatingDisplay: "none",
            CategoryDisplay: "none",
            DiscountDisplay: "flex",
            PriceBgColor: "transparent",
            BrandBgColor: "transparent",
            RatingBgColor: "transparent",
            CategoryBgColor: "transparent",
            DiscountBgColor: "white",
            BrandTransform: "rotate(0deg) rotate(270deg)",
            RatingTransform: "rotate(0deg) rotate(270deg)",
            CategoryTransform: "rotate(0deg) rotate(270deg)",
            DiscountTransform: "rotate(0deg) rotate(90deg)",
          };
          break;

        default:
          state.style = { ...state.style, DiscountDisplay: "none" };
          state.style.DiscountTransform = "rotate(0deg) rotate(270deg)";
          break;
      }
    },

    openSortAction: (state) => {
      state.style.SortDisplay = "flex";
    },

    closeSortAction: (state) => {
      state.style.SortDisplay = "none";
    },

    // Set all data
    setFilterProducts: (state, action) => {
      state.filterProducts = action.payload;
      state.filterProductList2 = [...state.filterProducts]; // Set InitialState
      state.filterPageState.priceProducts = [...state.filterProductList2];
      state.filterPageState.categoryProducts = [...state.filterProductList2];
      state.filterPageState.brandProducts = [...state.filterProductList2];
      state.filterPageState.rateProducts = [...state.filterProductList2];
      state.filterPageState.discountProducts = [...state.filterProductList2];
    },

    // Set sort products
    setSortProducts: (state, action) => {
      state.sortValue = action.payload;
      switch (state.sortValue) {
        case "popularity":
          state.sortItemActive = {
            popularityColor: "#2874f0",
            popularityBorderBottom: "0.09rem solid #2874f0",
          };
          state.filterProductList2.sort((a, b) => {
            return b.ratingStar - a.ratingStar;
          });
          break;

        case "low_high":
          state.sortItemActive = {
            low_highColor: "#2874f0",
            low_highBorderBottom: "0.09rem solid #2874f0",
          };
          state.filterProductList2.sort((a, b) => {
            return a.discountPrice - b.discountPrice;
          });
          break;

        case "high_low":
          state.sortItemActive = {
            high_lowColor: "#2874f0",
            high_lowBorderBottom: "0.09rem solid #2874f0",
          };
          state.filterProductList2.sort((a, b) => {
            return b.discountPrice - a.discountPrice;
          });
          break;

        // case "assured":
        // state.sortItemActive = {
        //   high_lowColor: "#2874f0",
        //   high_lowBorderBottom: "0.09rem solid #2874f0",
        // };
        //   state.filterProductList2.sort((a) => {
        //     return b.discountPrice - a.discountPrice;
        //   });
        //   break;

        default:
          break;
      }
    },

    // Set filter products
    setMinPriceFilter: (state, action) => {
      state.filterPageState.minPrice = action.payload;

      state.filterProductList2 = state.filterPageState.priceProducts.filter(
        (value) => {
          if (value.discountPrice <= action.payload) {
            return value.discountPrice >= state.filterPageState.maxPrice;
          }

          if (value.discountPrice >= state.filterPageState.maxPrice) {
            return value.discountPrice <= state.filterPageState.minPrice;
          }
          return true;
        }
      );

      state.filterPageState.categoryProducts = [...state.filterProductList2];
      state.filterPageState.brandProducts = [...state.filterProductList2];
      state.filterPageState.rateProducts = [...state.filterProductList2];
      state.filterPageState.discountProducts = [...state.filterProductList2];
    },

    setMaxPriceFilter: (state, action) => {
      state.filterPageState.maxPrice = action.payload;
      switch (action.payload) {
        case "100000":
          state.filterPageState.maxPriceRange = "100000";
          break;
        case "90000":
          state.filterPageState.maxPriceRange = "80000";
          break;
        case "75000":
          state.filterPageState.maxPriceRange = "60000";
          break;
        case "60000":
          state.filterPageState.maxPriceRange = "40000";
          break;

        default:
          state.filterPageState.maxPriceRange = "100000";
          break;
      }
      // console.log("max-price");

      state.filterProductList2 = state.filterPageState.priceProducts.filter(
        (value) => {
          if (value.discountPrice <= action.payload) {
            return value.discountPrice >= state.filterPageState.minPrice;
          }
          if (value.discountPrice >= state.filterPageState.minPrice) {
            return value.discountPrice <= state.filterPageState.maxPrice;
          }
          return true;
        }
      );

      state.filterPageState.categoryProducts = [...state.filterProductList2];
      state.filterPageState.brandProducts = [...state.filterProductList2];
      state.filterPageState.rateProducts = [...state.filterProductList2];
      state.filterPageState.discountProducts = [...state.filterProductList2];
    },

    setPriceFilter: (state, action) => {
      state.filterProductList2 = state.filterPageState.priceProducts.filter(
        (value) => {
          if (action.payload === "ninetyThousand-and-above") {
            return value.discountPrice >= "90000";
          } else if (action.payload === "seventyThousand-ninetyThousand") {
            if (value.discountPrice <= "90000") {
              return value.discountPrice >= "75000";
            }
            if (value.discountPrice >= "75000") {
              return value.discountPrice <= "90000";
            }
          } else if (action.payload === "sixtyThousand-seventyThousand") {
            if (value.discountPrice <= "75000") {
              return value.discountPrice >= "60000";
            }
            if (value.discountPrice >= "60000") {
              return value.discountPrice <= "75000";
            }
          } else if (action.payload === "fortyFiveThousand-sixtyThousand") {
            if (value.discountPrice <= "60000") {
              return value.discountPrice >= "45000";
            }
            if (value.discountPrice >= "45000") {
              return value.discountPrice <= "60000";
            }
          } else if (action.payload === "thirtyThousand-fortyFiveThousand") {
            if (value.discountPrice <= "45000") {
              return value.discountPrice >= "30000";
            }
            if (value.discountPrice >= "30000") {
              return value.discountPrice <= "45000";
            }
          } else if (action.payload === "fifteenThousand-thirtyThousand") {
            if (value.discountPrice <= "30000") {
              return value.discountPrice >= "15000";
            }
            if (value.discountPrice >= "15000") {
              return value.discountPrice <= "30000";
            }
          } else {
            return value.discountPrice <= "15000";
          }
          return true;
        }
      );

      state.filterPageState.categoryProducts = [...state.filterProductList2];
      state.filterPageState.brandProducts = [...state.filterProductList2];
      state.filterPageState.rateProducts = [...state.filterProductList2];
      state.filterPageState.discountProducts = [...state.filterProductList2];
    },

    setCategoryFilter: (state, action) => {
      if (action.payload === "All") {
        state.filterProductList2 = state.filterProducts;
      } else {
        state.filterProductList2 =
          state.filterPageState.categoryProducts.filter((value) => {
            return value.category === action.payload;
          });
      }
      state.filterPageState.brandProducts = [...state.filterProductList2];
      state.filterPageState.rateProducts = [...state.filterProductList2];
      state.filterPageState.discountProducts = [...state.filterProductList2];
    },

    setBrandFilter: (state, action) => {
      if (action.payload === "All") {
        state.filterProductList2 = state.filterProducts;
      } else {
        state.filterProductList2 = state.filterPageState.brandProducts.filter(
          (value) => {
            return value.company === action.payload;
          }
        );
      }
      state.filterPageState.categoryProducts = [...state.filterProductList2]; // Store filter products in categoryProducts
      state.filterPageState.rateProducts = [...state.filterProductList2]; // Store filter products in ratingProducts
      state.filterPageState.discountProducts = [...state.filterProductList2]; // Store filter products in discountProducts
    },

    setRatingFilter: (state, action) => {
      state.filterProductList2 = state.filterPageState.rateProducts.filter(
        (value) => {
          switch (action.payload) {
            case "four-star&above":
              return value.ratingStar >= 4;

            case "three-star&above":
              return value.ratingStar >= 3;

            case "two-star&above":
              return value.ratingStar >= 2;

            case "one-star&above":
              return value.ratingStar >= 1;

            default:
              return value.ratingStar >= 1;
          }
        }
      );
      state.filterPageState.categoryProducts = [...state.filterProductList2]; // tore filter products in categoryProducts
      state.filterPageState.brandProducts = [...state.filterProductList2]; // Store filter products in brandProducts
      state.filterPageState.discountProducts = [...state.filterProductList2]; // Store filter products in discountProducts
    },

    setDiscountFilter: (state, action) => {
      state.filterProductList2 = state.filterPageState.discountProducts.filter(
        (value) => {
          switch (action.payload) {
            case "fiftyPer_more":
              return value.discountPercentage >= 50;

            case "fortyPer_more":
              return value.discountPercentage >= 40;

            case "thirtyPer_more":
              return value.discountPercentage >= 30;

            case "twentyPer_more":
              return value.discountPercentage >= 20;

            case "tenPer_more":
              return value.discountPercentage >= 10;

            default:
              return value.discountPercentage >= 10;
          }
        }
      );
      state.filterPageState.categoryProducts = [...state.filterProductList2]; // tore filter products in categoryProducts
      state.filterPageState.brandProducts = [...state.filterProductList2]; // Store filter products in brandProducts
      state.filterPageState.rateProducts = [...state.filterProductList2]; // Store filter products in rateProducts
    },

    setFiltersDisplay: (state, action) => {
      if (state.style.FiltersDisplay === "none") {
        state.style.FiltersDisplay = "flex";
      } else {
        state.style.FiltersDisplay = "none";
      }
    },
  },
});

export default ProductFilterSlice.reducer;

export const {
  openPriceContainerAction,
  openCategoryContainerAction,
  openBrandContainerAction,
  openRatingContainerAction,
  openDiscountContainerAction,
  openSortAction,
  closeSortAction,
  setFilterProducts,
  setSortProducts,
  setMinPriceFilter,
  setMaxPriceFilter,
  setCategoryFilter,
  setBrandFilter,
  setRatingFilter,
  setDiscountFilter,
  setFiltersDisplay,
  setPriceFilter,
} = ProductFilterSlice.actions;
