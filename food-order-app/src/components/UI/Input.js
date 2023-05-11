import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.input}>
      <label htmlFor="">Amount</label>
      <input type="text" />
    </div>
  );
};

export default Input;
