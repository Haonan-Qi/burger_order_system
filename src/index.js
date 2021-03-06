import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import builderBuilderReducer from "./store/reducers/burgerBuilderReducer";
import ordersReducer from "./store/reducers/ordersReducer";
import contactDataReducer from "./store/reducers/contactDataReducer";
import loadingReducer from "./store/reducers/loadingReducer";
import authReducer from './store/reducers/authReducer';

const rootReducer = combineReducers({
  burgerBuilder: builderBuilderReducer,
  orders: ordersReducer,
  contactData: contactDataReducer,
  loading: loadingReducer,
  auth: authReducer,
});


const composeEnhancers = process.env.NODE_ENV === "development"? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    {/* Provider Wrap everything */}
    <Provider store={store}>
      <BrowserRouter> {/* Remember to set Root Path accordingly When deploy this app */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
