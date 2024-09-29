import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import HomeScreen from "./screens/HomeScreen";

const reducer = (state={
  menu: "closeMenu"
},action) => {
  switch (action.type) { 
    case "OPENMENU":
      return {menu:"openMenu"};
    case "CLOSEMENU":
      return {menu:"closeMenu"};
    case "OPENLOGIN":
      return {menu:"openLogin"};
    case "CLOSELOGIN":
      return {menu:"closeLogin"};
    default:
      return state;
  }
};

const database = createStore(reducer);

const App = () =>   (
<Provider store={database}>
<HomeScreen></HomeScreen>
</Provider>
);

export default App;

