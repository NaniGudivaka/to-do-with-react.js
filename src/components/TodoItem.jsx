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
  const toggleComplete = async (id) => {
    try {
      const res = await axios.put(`https://todo-backend-with-node-js-mysql.onrender.com/user/edit/${todo.id}`);

      setTodos((prevTodos) => prevTodos.map((item) => item.id === id ? { ...item, completed: res.data.completed } : item
      )
      );
    }
catch(err){
  console.log(err)
}
};

  return (

    <div className="todo-item">

      <span>{todo.tasks}</span>

      <div className="icons">

        <FaCheck className={todo.completed ? 'check-mark completed' : 'check-mark'}
          onClick={() => toggleComplete(todo.id)}
        />

        <FaEdit />

        <FaTrash onClick={handleDelete} />

      </div>

    </div>

  );

}

export default TodoItem;