import React from "react";
import TaskItem from "./TaskItem";

function TodoList({ tasks }) {
  console.log(tasks);
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} onDelete={task.onDeleteItem}>
          {task.text}
        </TaskItem>
      ))}
    </ul>
  );
}

export default TodoList;
