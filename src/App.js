import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

function App() {
  return (
    <Layout>
      <Route path="/burger-Builder" component={BurgerBuilder} />
      <Route path="/checkout" component={Checkout} />
    </Layout>
  );
}

export default App;
