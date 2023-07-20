import styles from "../style.module.css";
const ToDo = ({ todoItem, todoList, setToDoList }) => {
  const deleteToDo = () => {
    setToDoList(todoList.filter((item) => item.id !== todoItem.id));
  };
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 className={styles.todoname}>{todoItem.name}</h3>
        <button className={styles.deletebtn} onClick={deleteToDo}>
          Done
        </button>
      </div>
    </div>
  );
};

export default ToDo;
