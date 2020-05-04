import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
import { loadingStart, loadingEnd } from "./loading";

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
        console.log(response.data);
        dispatch(loadingEnd());
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
