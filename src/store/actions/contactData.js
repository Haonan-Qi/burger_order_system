import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
import { loadingStart, loadingEnd } from "./loading";
import { Route } from "react-router-dom";
import React from "react";

const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const submitOrder = (orderData) => {
  return (dispatch, getState) => {
    dispatch(loadingStart());
    const state = getState();
    console.log(state);

    axios
      .post("/orders.json?auth=" + state.auth.token, orderData)
      .then((response) => {
        console.log(response.data); // Notice
        dispatch(loadingEnd());
        return (
          <Route
            render={(x) => {
              return <p>Congratlation!!</p>;
            }}
          />
        );
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
