import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  error: null,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    default:
      return state;
  }
};

export default ordersReducer;
