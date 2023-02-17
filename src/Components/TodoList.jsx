import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todoListItems,
  settodoListItems,
  setInputText,
  setEditItem,
  EditItem,
}) {
  //   console.log(todoListItems);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoListItems.map((todoItems) => {
          return (
            <Todo
              key={todoItems.id}
              TodoList={todoListItems}
              setTodosList={settodoListItems}
              {...todoItems}
              todoItems={todoItems}
              setInputText={setInputText}
              setEditItem={setEditItem}
              EditItem={EditItem}
            />
          );
        })}
      </ul>
    </div>
  );
}
