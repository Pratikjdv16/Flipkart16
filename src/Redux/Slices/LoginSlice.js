import { createSlice } from "@reduxjs/toolkit";

const getLocalLoginData = () => {
  let getUser = localStorage.getItem("username");
  if (getUser == []) {
    return [];
  } else {
    let login = JSON.parse(getUser);
    return login;
  }
};

let emailReg = /^[a-z][a-z0-9]{3,}@[gmail]{5}[.a-z]{2,}[.a-z]{2,}$/;

const LoginSlice = createSlice({
  name: "Slice6",
  initialState: {
    style: {
      LoginDisplay: "none",
      top: "1.1rem",
      fontSize: "1.1rem",
      borderBottomColor: "#e0e0e0",
    },
    loginInformation: "",
    saveLoginInfo: getLocalLoginData(),
    loginInfoError: undefined,
  },
  reducers: {
    setLoginDisplay: (state) => {
      if (state.style.LoginDisplay === "none") {
        state.style.LoginDisplay = "flex";
      } else {
        state.style.LoginDisplay = "none";
      }
    },

    styleChange: (state, actions) => {
      if (actions.payload === "onClick") {
        state.style.top = "-0.9rem";
        state.style.fontSize = "0.9rem";
        state.style.borderBottomColor = "#2874f0";
        state.loginInfoError = true;
      }

      if (actions.payload === "onBlur" && state.loginInformation === "") {
        state.style.top = "1.1rem";
        state.style.fontSize = "1.1rem";
      }

      if (
        actions.payload === "onBlur" &&
        !emailReg.test(state.loginInformation)
      ) {
        state.style.top = "-0.9rem";
        state.style.fontSize = "0.9rem";
        state.loginInfoError = false;
        state.style.borderBottomColor = "#ff6161";
      }
    },

    getLoginInfo: (state, actions) => {
      if (state.loginInformation === "") {
        state.style.top = "-0.9rem";
        state.style.fontSize = "0.9rem";
      }
      state.loginInformation = actions.payload;
    },

    setLoginInfo: (state) => {
      let str = state.loginInformation;
      let regex = str.split(/[0-9.@]/);
      let username = regex.filter((value) => {
        if (value !== "") {
          return value;
        }
        return value;
      });

      if (emailReg.test(state.loginInformation)) {
        state.loginInfoError = true;
        state.saveLoginInfo = [username[0]];
        localStorage.setItem("username", JSON.stringify(state.saveLoginInfo));
        state.loginInformation = "";
        state.style.LoginDisplay = "none";
        state.style.top = "1.1rem";
        state.style.fontSize = "1.1rem";
      } else {
        state.loginInfoError = false;
        state.style.borderBottomColor = "#ff6161";
      }
    },

    logoutUser: (state) => {
      state.saveLoginInfo = "";
    },
  },
});

export default LoginSlice.reducer;

export const {
  setLoginDisplay,
  styleChange,
  getLoginInfo,
  setLoginInfo,
  logoutUser,
} = LoginSlice.actions;
