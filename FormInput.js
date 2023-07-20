import styles from "../style.module.css";
import shortid from "shortid";
const FormInput = ({ todo, setToDo, todoList, setToDoList }) => {
  const handleChange = (event) => {
    setToDo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setToDoList([...todoList, { name: todo, id: shortid.generate() }]);
    console.log(todoList);
    setToDo(""); // clear input field after submission
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add items to list"
          className={styles.inputfield}
          value={todo}
          onChange={handleChange}
        />
        <button type="submit" className={styles.todobutton}>
          Add
        </button>
      </form>
    </div>
  );
};

export default FormInput;
