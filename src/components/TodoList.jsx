
import TodoItem from "./TodoItem";

function TodoList({todos, setTodos, setEditingId, setEditingTask}) {

  // const todos = [];

  return (

    <div>

      {
        todos.length === 0 ? (
          <p>No Tasks Available</p>
        ) : (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} setEditingId={setEditingId} setEditingTask={setEditingTask}/>
          ))
        )
      }

    </div>

  );

}

export default TodoList;