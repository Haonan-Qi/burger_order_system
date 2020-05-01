import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckoutSummary from "./containers/Checkout/Checkout";

function App() {
  return (
    <Layout>
      <Route path="/Burger-Builder" component={BurgerBuilder} />
      <Route path="/Checkout-Summary" component={CheckoutSummary} />
    </Layout>
  );
}

export default App;
