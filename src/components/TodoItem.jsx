import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

function TodoItem({ todo }) {

  return (

    <div className="todo-item">

      <span>{todo.task}</span>

      <div className="icons">

        <FaCheck />

        <FaEdit />

        <FaTrash />

      </div>

    </div>

  );

}

export default TodoItem;