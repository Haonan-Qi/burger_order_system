import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";

function App() {
  return (
    <Layout>
      <Route path="/auth" component={Auth} exact />
      <Route path="/burger-Builder" component={BurgerBuilder} />
      <Route path="/logout" component={Logout} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/orders" component={Orders} />
    </Layout>
  );
}

export default App;
