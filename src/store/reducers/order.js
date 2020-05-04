import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  error: null,
  loading: false,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    case actionTypes.LOADINGSTART:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOADINGEND:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default ordersReducer;
