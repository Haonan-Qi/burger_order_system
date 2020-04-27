import React from "react";
import classes from "./Burger.module.css";
import propTypes from 'prop-types'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      //[salad,bacon,meet,greens]
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    }) //[[],[]]
    .flat();

    let Ingredients = transformedIngredients.length > 0 ? transformedIngredients : <p>Please Start Adding Ingrediengts</p> 


  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {Ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients:propTypes.object
}

export default Burger;
