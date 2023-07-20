import { useState } from "react";
import FormInput from "./components/FormInput";
import Header from "./components/header";

import ToDoList from "./components/ToDoList";
function App() {
  const [todo, setToDo] = useState("");
  const [todoList, setToDoList] = useState([]);
  return (
    <div className="App">
      <Header />
      <FormInput
        todo={todo}
        setToDo={setToDo}
        todoList={todoList}
        setToDoList={setToDoList}
      />
      <ToDoList setToDoList={setToDoList} todoList={todoList} />
    </div>
  );
}

export default App;
