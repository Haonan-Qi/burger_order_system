import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";


const FirstOrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ings).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ings[igKey]}
      </li>
    );
  });
  
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total Price: <strong>{props.price.toFixed(2)} </strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

FirstOrderSummary.propTypes = {
  ingredients: PropTypes.object,
  price: PropTypes.number,
  purchaseCancelled: PropTypes.func,
  purchaseContinued: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
  };
};


export default connect(mapStateToProps)(FirstOrderSummary);
