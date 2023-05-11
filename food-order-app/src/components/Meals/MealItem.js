import React from "react";
import classes from "./mealItem.module.css";
import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  // const mealName =
  //   console.log(props.data.name);
  return (
    <Card>
      <li className={classes.meal}>
        <div>
          <h3>{props.data.name}</h3>
          <div className={classes.description}>{props.data.description}</div>
          <div className={classes.price}>${props.data.price}</div>
        </div>
        <div>
          <MealItemForm />
        </div>
      </li>
    </Card>
  );
};

export default MealItem;
