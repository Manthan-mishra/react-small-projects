import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "../Users/AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [isError, setIsError] = useState(false);

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    
    if (enteredName.trim().length && enteredAge.trim().length) {
      props.onAddUser(enteredName, enteredAge);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    } else {
      setIsError(true);
    }
  };
  const errorHandler = () => {
    setIsError(false);
  };
  return (
    <div>
      {isError && (
        <ErrorModal
          title="an error occured!"
          message="Something went wrong"
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
