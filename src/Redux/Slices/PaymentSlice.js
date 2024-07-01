import { createSlice } from "@reduxjs/toolkit";

const regex = {
  nameRegex: /^[A-Za-z. ]{3,}$/,
  mobileRegex: /^[789][0-9]{9}$/,
  pinCodeRegex: /^[0-9]{6}$/,
  stateRegex: /^[A-Za-z ]{3,}$/,
  cityRegex: /^[A-Za-z]{2,28}$/,
  localityRegex: /^[A-Za-z0-9,-/. ]{5,}$/,
  addressRegex: /^[A-Za-z,-/. ]{5,}$/,
  captchaRegex: /^[0-9]{3}$/,
};

// const deliveryData = localStorage.getItem("DeliveryInfo");
// const getDeliveryData = JSON.parse(deliveryData);

const getLocalDeliveryProduct = () => {
  const deliveryProduct = localStorage.getItem("DeliveryProduct");
  if (deliveryProduct == []) {
    return [];
  } else {
    return JSON.parse(deliveryProduct);
  }
};

const PaymentSlice = createSlice({
  name: "Slice7",
  initialState: {
    buyProducts: getLocalDeliveryProduct(),
    style: {
      addressDisplay: false,
      productListDisplay: true,
      paymentDisplay: false,
      captchaDisplay: false,
    },
    priceData: {
      totalOriginalPrice: 0,
      totalDiscountPrice: 0,
      totalPrice: 0,
    },
    formData: {
      userName: "",
      mobile_no: "",
      pinCode: "",
      state: "",
      address: "",
      city: "",
      locality: "",
    },
    formError: {
      nameError: false,
      mobileError: false,
      pinCodeError: false,
      stateError: false,
      cityError: false,
      localityError: false,
      addressError: false,
    },
    captcha: {
      setCaptcha: "",
      getCaptcha: "",
      captchaError: false,
    },
    paymentInfo: {},
    confirmation: {
      deliveryInfoConfirm: false,
      deliveryProductConfirm: false,
      orderSuccessPopUp: false,
    },
  },
  reducers: {
    setBuyProduct: (state, action) => {
      let data = action.payload;
      console.log(data);
      state.buyProducts = [...data];
      console.log(state.buyProducts);
    },

    setPaymentDisplay: (state, action) => {
      if (action.payload === "address") {
        if (state.style.addressDisplay === true) {
          state.style.addressDisplay = false;
        } else {
          state.style.addressDisplay = true;
          state.style.paymentDisplay = false;
        }
      }

      if (action.payload === "productList") {
        if (state.style.productListDisplay === true) {
          state.confirmation.deliveryProductConfirm = true;
          state.style.productListDisplay = false;
        } else {
          state.style.productListDisplay = true;
          state.style.paymentDisplay = false;
        }
      }

      if (action.payload === "payment") {
        if (state.style.paymentDisplay === true) {
          state.style.paymentDisplay = false;
        } else {
          state.style.paymentDisplay = true;
        }
      }

      if (action.payload === "captcha") {
        if (state.style.captchaDisplay === true) {
          state.style.captchaDisplay = false;
        } else {
          state.style.captchaDisplay = true;
        }
      }
    },

    setUserInfo: (state, action) => {
      let { inputName, value } = action.payload;
      state.formData = { ...state.formData, [inputName]: value };
    },

    setFormInfoError: (state, action) => {
      switch (action.payload) {
        case "userName":
          if (regex.nameRegex.test(state.formData.userName)) {
            state.formError.nameError = false;
          } else {
            state.formError.nameError = true;
          }
          break;

        case "mobile_no":
          if (regex.mobileRegex.test(state.formData.mobile_no)) {
            state.formError.mobileError = false;
          } else {
            state.formError.mobileError = true;
          }
          break;

        case "pinCode":
          if (regex.pinCodeRegex.test(state.formData.pinCode)) {
            state.formError.pinCodeError = false;
          } else {
            state.formError.pinCodeError = true;
          }
          break;

        case "state":
          if (regex.stateRegex.test(state.formData.state)) {
            state.formError.stateError = false;
          } else {
            state.formError.stateError = true;
          }
          break;

        case "city":
          if (regex.cityRegex.test(state.formData.city)) {
            state.formError.cityError = false;
          } else {
            state.formError.cityError = true;
          }
          break;

        case "locality":
          if (regex.localityRegex.test(state.formData.locality)) {
            state.formError.localityError = false;
          } else {
            state.formError.localityError = true;
          }
          break;

        case "address":
          if (regex.addressRegex.test(state.formData.address)) {
            state.formError.addressError = false;
          } else {
            state.formError.addressError = true;
          }
          break;

        default:
          break;
      }
    },

    incPaymentProductQuantity: (state, action) => {
      state.buyProducts = state.buyProducts.map((item) => {
        if (item.index === action.payload) {
          item.quantity = item.quantity + 1;
        }
        return { ...item, quantity: item.quantity };
      });
    },

    decPaymentProductQuantity: (state, action) => {
      state.buyProducts = state.buyProducts.map((item) => {
        if (item.index === action.payload) {
          item.quantity = item.quantity > 1 ? item.quantity - 1 : item.quantity;
        }
        return { ...item, quantity: item.quantity };
      });
    },

    removePaymentProduct: (state, action) => {
      state.buyProducts = state.buyProducts.filter((item) => {
        if (item.index === action.payload) {
          return false;
        } else {
          return true;
        }
      });
    },

    setPaymentTotalPrice: (state) => {
      state.priceData.totalOriginalPrice = state.buyProducts.reduce(
        (pValue, cValue) => {
          // 0 + 86000
          // 86000 + 70000
          return pValue + cValue.originalPrice * cValue.quantity;
        },
        0
      );

      state.priceData.totalDiscountPrice = state.buyProducts.reduce(
        (pValue, cValue) => {
          // 0 - cValue.originalPrice
          // 0 + (50000)
          // 50000 + (70000 - 61000)
          return (
            pValue +
            (cValue.originalPrice * cValue.quantity -
              cValue.discountPrice * cValue.quantity)
          );
        },
        0
      );

      state.priceData.totalPrice =
        state.priceData.totalOriginalPrice - state.priceData.totalDiscountPrice;
    },

    setCaptcha: (state) => {
      let createCaptcha = Math.round(100 + (999 - 100) * Math.random());
      state.captcha.setCaptcha = String(createCaptcha);
    },

    typeCaptcha: (state, action) => {
      state.captcha.getCaptcha = action.payload;
    },

    setCaptchaError: (state) => {
      if (regex.captchaRegex.test(state.captcha.getCaptcha)) {
        state.captcha.captchaError = false;
      } else {
        state.captcha.captchaError = true;
      }
    },

    confirmOrder: (state) => {
      if (state.captcha.setCaptcha === state.captcha.getCaptcha) {
        state.confirmation.orderSuccessPopUp = true;
        state.captcha.getCaptcha = "";
      } else {
        state.style.captchaDisplay = true;
      }
    },

    confirmPopUpOk: (state) => {
      state.confirmation.orderSuccessPopUp = false;
    },

    saveFormData: (state) => {
      if (
        state.formData.userName === "" &&
        state.formData.mobile_no === "" &&
        state.formData.pinCode === "" &&
        state.formData.state === "" &&
        state.formData.city === "" &&
        state.formData.locality === "" &&
        state.formData.address === ""
      ) {
        state.formError = {
          nameError: true,
          mobileError: true,
          pinCodeError: true,
          stateError: true,
          cityError: true,
          localityError: true,
          addressError: true,
        };
      } else if (state.formData.userName === "") {
        state.formError.nameError = true;
      } else if (state.formData.mobile_no === "") {
        state.formError.mobileError = true;
      } else if (state.formData.pinCode === "") {
        state.formError.pinCodeError = true;
      } else if (state.formData.state === "") {
        state.formError.stateError = true;
      } else if (state.formData.city === "") {
        state.formError.localityError = true;
      } else if (state.formData.address === "") {
        state.formError.addressError = true;
      } else {
        state.paymentInfo = { ...state.formData };
        // localStorage.setItem("DeliveryInfo", JSON.stringify(state.paymentInfo));
        state.confirmation.deliveryInfoConfirm = true;
        state.style.addressDisplay = false;
      }
    },
  },
});

export default PaymentSlice.reducer;

export const {
  setBuyProduct,
  setPaymentDisplay,
  setPaymentTotalPrice,
  incPaymentProductQuantity,
  decPaymentProductQuantity,
  setUserInfo,
  setFormInfoError,
  setCaptcha,
  typeCaptcha,
  confirmOrder,
  setCaptchaError,
  saveFormData,
  confirmPopUpOk,
  removePaymentProduct,
} = PaymentSlice.actions;
