import React from "react";
import TaskItem from "./TaskItem";

function TodoList({ tasks, onDelete, onUpdate }) {
  console.log(tasks);
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          text={task.text}
          onDelete={onDelete}
          onSave={onUpdate}
        ></TaskItem>
      ))}
    </ul>
  );
}

export default TodoList;
