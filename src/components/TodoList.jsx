
import TodoItem from "./TodoItem";

function TodoList() {

  const todos = [];

  return (

    <div>

      {
        todos.length === 0 ? (
          <p>No Tasks Available</p>
        ) : (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )
      }

    </div>

  );

}

export default TodoList;