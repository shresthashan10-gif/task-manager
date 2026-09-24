import { useState } from "react";

function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.text);

  const handleSave = () => {
    if (draft.trim() !== "") {
      onEdit(task.id, draft.trim());
    }
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? "task done" : "task"}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <input
          className="edit-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
      ) : (
        <span className="task-text">{task.text}</span>
      )}

      <span className={"tag " + task.category.toLowerCase()}>{task.category}</span>

      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button className="delete" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
