import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

const setOrders = (orders) => {
  return { type: actionTypes.SET_ORDERS, orders: orders };
};

const fetchOrdersFailed = (error) => {
    
    return {type: actionTypes.FETCH_ORDERS_FAILED,error:error}
};

const loadingStart = () => {
    return {type: actionTypes.LOADINGSTART,loading:true}
};

const loadingEnd = () => {
  return {type: actionTypes.LOADINGEND,loading:false} 
};


export const initialOrders = (dispatch) => {
  return (dispatch) => {
    axios
      .get("/orders.json")
      .then((res) => {
        dispatch(loadingStart())
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(setOrders(fetchedOrders));
        dispatch(loadingEnd())
      })
      .catch((err) => {
        dispatch(fetchOrdersFailed(err))
      });

    return;
  };
};
