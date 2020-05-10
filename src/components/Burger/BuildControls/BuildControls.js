import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import PropTypes from 'prop-types'

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)} </strong>
    </p>
    {props.controls.map((type) => (
      <BuildControl
        key={type}
        label={type}
        added={props.ingredientAdded.bind(this, type)}
        removed={props.ingredientRemoved.bind(this, type)}
        disabled={props.disabled[type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
     {props.isAuth? "ORDER NOW":"SIGNIN TO ORDER"}
    </button>
  </div>
);

BuildControls.propTypes = {
  price:PropTypes.number,
  controls:PropTypes.array,
  ingredientAdded:PropTypes.func,
  ingredientRemoved:PropTypes.func,
  purchasable:PropTypes.bool,
  ordered:PropTypes.func
}

export default BuildControls;

