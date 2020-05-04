import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default loadingReducer;
