import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
import { loadingStart, loadingEnd } from "./loading";
import { Route, Redirect } from "react-router-dom";
import React from "react";

const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const submitOrder = (orderData) => {
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .post("/orders.json", orderData)
      .then((response) => {
        console.log(response.data); // Notice
        dispatch(loadingEnd());
        return <Route render={(x) => {
            return <p>Congratlation!!</p>
        }}/>;
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
