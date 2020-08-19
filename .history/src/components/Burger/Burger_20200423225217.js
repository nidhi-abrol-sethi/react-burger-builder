import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    console.log(Object.keys(props.ingredients));
    console.log(igKey);

    console.log([...Array(props.ingredients[igKey])]);
    console.log(_, i);

    return [...Array(props.ingredients[igKey])].map((_, i) => {
      console.log([...Array(props.ingredients[igKey])]);
      console.log(_, i);
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
