import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const buildControls = (props) => (

  <div className={classes.BuildControls}>
    {props.controls.map((type) => (
      <BuildControl
        key={type}
        label={type}
        added={props.ingredientAdded.bind(this,type)}
        removed={props.ingredientRemoved.bind(this,type)}
        disabled={props.disabled[type]}
      />
    ))}

    <button className={classes.OrderButton} disabled={!props.purchasable}>
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
