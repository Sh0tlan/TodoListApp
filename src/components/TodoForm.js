import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm(props) {
  const [enteredValue, setEnteredValue] = useState("");

  const changeHandler = (event) => {
    setEnteredValue(event.target.value);
    console.log(enteredValue);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>TODO List</label>
        <input type="text" onChange={changeHandler} />
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default TodoForm;
