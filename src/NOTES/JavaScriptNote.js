// Object Counter Converter
// {ingredients: {salad: x,bacon: y,cheese: z,meat: q}} ====> [[(x)],[(y)],[(z)],[(q)]]
state = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    }
}
let transformedIngredients = Object.keys( props.ingredients ) 
        .map( igKey => {  //[salad,bacon,meet,greens]
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )