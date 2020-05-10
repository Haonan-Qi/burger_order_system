import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
import { loadingStart, loadingEnd } from "./loading";

const setOrders = (orders) => {
  return { type: actionTypes.SET_ORDERS, orders: orders };
};

const fetchOrdersFailed = (error) => {
  return { type: actionTypes.FETCH_ORDERS_FAILED, error: error };
};

export const initialOrders = (token) => {
  return (dispatch,getState) => {  //Note Review how this can be passed && this work but it is anti-pattern for redux flow logic
    const a = getState();
    console.log('State');
    
    console.log(a);
    
    axios
      .get("/orders.json?auth=" + token) //Not how to pass auth to paramas through url
      .then((res) => {
        dispatch(loadingStart());
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(setOrders(fetchedOrders));
        dispatch(loadingEnd());
      })
      .catch((err) => {
        dispatch(fetchOrdersFailed(err));
      });

    return;
  };
};
