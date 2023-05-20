import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import "../styles/TodoItem.css";

function TaskItem(props) {
  return (
    <li className="task-item">
      {props.children}

      <div className="task-item__icons">
        <span>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    </li>
  );
}

export default TaskItem;
