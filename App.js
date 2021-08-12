import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ReduxThunk from "redux-thunk";

import authReducer from "./store/reducers/auth";
import travelReducer from "./store/reducers/travel";
import statusReducer from "./store/reducers/status";
import userReducer from "./store/reducers/user";
import MainNavigator from "./navigation/MainNavigator";

const rootReducer = combineReducers({
  auth: authReducer,
  travel: travelReducer,
  status: statusReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
