import React from "react";

function TodoList({ tasks }) {
  const getTaskList = tasks.map((task) => <li key={task.id}>{task.text}</li>);
  console.log(tasks);
  return (
    <div>
      <ul> {getTaskList}</ul>
      <button>Click here</button>
    </div>
  );
}

export default TodoList;
