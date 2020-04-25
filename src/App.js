import React from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <Layout>
      <p>Test Paragraph</p>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
  );
}

export default App;
