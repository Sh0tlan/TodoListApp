import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [data, setData] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addTaskHandler = (enteredText) => {
    setData((prevState) => {
      const updatedData = [...prevState];
      updatedData.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedData;
    });
  };

  const deleteItemHandler = (taskId) => {
    setData((prevData) => {
      const updatedData = prevData.filter((task) => task.id !== taskId);
      return updatedData;
    });
  };

  const updateTaskHandler = (taskId, newText) => {
    setData((prevData) => {
      const updatedData = prevData.map((task) => {
        if (task.id === taskId) {
          return { ...task, text: newText };
        }
        return task;
      });
      return updatedData;
    });
  };

  return (
    <>
      <section id="task-form">
        <TodoForm onAddTask={addTaskHandler}></TodoForm>
      </section>
      <section id="tasks">
        <TodoList
          tasks={data}
          onDelete={deleteItemHandler}
          onUpdate={updateTaskHandler}
        ></TodoList>
      </section>
    </>
  );
}

export default App;
