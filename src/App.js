import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoListItems, settodoListItems] = useState([]);
  const [editItem, setEditItem] = useState(0);

  const EditItem = (todo, index) => {
    setEditItem(index);
    setInputText(todo);
  };
  return (
    <div className="App">
      <header> 
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        TodosList={todoListItems}
        setTodosList={settodoListItems}
        setInputText={setInputText}
        editItem={editItem}
      />
      <TodoList
        editItem={editItem}
        setEditItem={setEditItem}
        todoListItems={todoListItems}
        settodoListItems={settodoListItems}
        setInputText={setInputText}
        EditItem={EditItem}
      />
    </div>
  );
}

export default App;
