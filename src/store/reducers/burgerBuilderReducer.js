import * as ActionTyps from "../actions";

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },
  totalPrice: 4,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};


const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTyps.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients, //Note ... will not copy all level of object, will only one level, deeper level need to be ... again
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
      break;
    case ActionTyps.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients, //Note ... will not copy all level of object, will only one level, deeper level need to be ... again
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]

      };
      break;
    default:
      return state;
      break;
  }
};

export default burgerBuilderReducer;
