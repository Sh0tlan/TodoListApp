import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

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
  return (
    <section id="task-form">
      <TodoForm onAddTask={addTaskHandler}></TodoForm>
    </section>
  );
}

export default App;
