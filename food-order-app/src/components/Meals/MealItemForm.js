import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
const MealItemForm = () => {
  return (
    <>
      <form className={classes.form}>
        <Input />
        <button>+ Add</button>
      </form>
    </>
  );
};

export default MealItemForm;
