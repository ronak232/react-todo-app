import React from "react";
import { faCheck, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// All the items that will be render on ui whenever we add into it.

export default function Todo({
  text,
  id,
  TodoList,
  setTodosList,
  todoItems,
  EditItem
}) {
  const deleteItemHandler = () => {
    setTodosList(TodoList.filter((item) => item.id !== todoItems.id));
  };
  return (
    <li className="todo-items" placeholder="List">
      {text}
      <div className="list-items">
        <button className="edit-btn" onClick={() => EditItem(text, id)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="complete-btn">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="trash-btn" onClick={deleteItemHandler}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
