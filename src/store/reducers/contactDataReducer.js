import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: null,
};

const contactDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        error:action.error
      };
    default:
      return state;
  }
};

export default contactDataReducer;
