// Object Counter Converter
// {ingredients: {salad: x,bacon: y,cheese: z,meat: q}} ====> [[]*x,[]*y,[]*z,[]*z]
// Array.flat()
state = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
};
let transformedIngredients = Object.keys(props.ingredients)
  .map((igKey) => {
    //[salad,bacon,meet,greens]
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  }) //[[],[],[],etc...] array of array
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []); // [] single array

//or array.flat()

// fix number format
<p>
  Total Price: <strong>{props.price.toFixed(2)} </strong>
</p>;
