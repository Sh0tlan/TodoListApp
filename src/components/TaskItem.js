import React, { useState } from "react";
import "../styles/TodoItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenSquare } from "@fortawesome/free-solid-svg-icons";

function TaskItem({ id, text, onDelete, onSave }) {
  const [isEditing, setEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onSave(id, updatedText);
    setEditing(false);
  };

  const handleCancel = () => {
    setUpdatedText(text);
    setEditing(false);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <p>{text}</p>
      )}

      <div className="task-item__icons">
        <span onClick={isEditing ? handleSave : handleEdit}>
          <FontAwesomeIcon icon={faPenSquare} />
        </span>
        <span onClick={isEditing ? handleCancel : handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    </li>
  );
}

export default TaskItem;
