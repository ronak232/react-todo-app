import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Form({
  setInputText,
  TodosList,
  setTodosList,
  inputText,
  editItem,
}) {
  const onhandleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("click", editItem);

    e.preventDefault();
    const clickTodo = TodosList.map((item) => {
      if (item.id === editItem) {
        return { ...item, text: inputText };
      } else {
        return item;
      }
    });
    if (editItem && clickTodo) {
      setTodosList(clickTodo);
      return;
    }
    setTodosList([
      ...TodosList,
      { text: inputText, completed: false, id: Date.now() },
    ]);
    // To update the value of state
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // To update the input value when we add new value in it.
          value={inputText}
          onChange={onhandleInputText}
        />
        <button className="todo-button" type="submit">
          {editItem ? (
            <FontAwesomeIcon icon={faEdit} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </button>
      </form>
    </div>
  );
}
