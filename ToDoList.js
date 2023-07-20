import ToDo from "./ToDo";

const ToDoList = ({ todoList, setToDoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <ToDo
          setToDoList={setToDoList}
          todoList={todoList}
          key={todoItem.id}
          todoItem={todoItem}
        ></ToDo>
      ))}
    </div>
  );
};

export default ToDoList;
