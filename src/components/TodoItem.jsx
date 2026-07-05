import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import axios from "axios";

function TodoItem({ todo, setTodos }) {

  const handleDelete = async () => {
  try {
    await axios.delete(`http://localhost:3000/user/delete/${todo.id}`);

    // // Refresh todos
    // fetchTodos();

    setTodos(prevTodos => prevTodos.filter(item => item.id !== todo.id));
  } catch (error) {
    console.log(error);
  }
};

  return (

    <div className="todo-item">

      <span>{todo.tasks}</span>

      <div className="icons">

        <FaCheck />

        <FaEdit />

        <FaTrash onClick={handleDelete}/>

      </div>

    </div>

  );

}

export default TodoItem;