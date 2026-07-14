import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import axios from "axios";

function TodoItem({ todo, setTodos }) {

  const handleDelete = async () => {
  try {
    await axios.delete(`https://todo-backend-with-node-js-mysql.onrender.com/user/delete/${todo.id}`);

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

        <FaCheck className={todo.completed ? 'check-mark completed' : 'check-mark'}/>

        <FaEdit />

        <FaTrash onClick={handleDelete}/>

      </div>

    </div>

  );

}

export default TodoItem;