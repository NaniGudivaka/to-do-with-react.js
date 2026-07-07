import { useState } from "react";
import axios from "axios";
function TodoForm({user, setTodos}) {

  const [tasks, setTasks] = useState('');

 async function handleClick(e){
    e.preventDefault();

    if(!tasks.trim()) return;

  try{
    const response = await axios.post('https://todo-backend-with-node-js-mysql.onrender.com/user/todo',{
      user_id: user.id,
      tasks
    });

    console.log(response.data);
    await fetchTodos();
    setTasks('');


  }catch(error){
    console.log(error);
  }

  }
  const fetchTodos = async () => {
  try {
    const response = await axios.get(
      `https://todo-backend-with-node-js-mysql.onrender.com/user/users/${user.id}`
    );

    setTodos(response.data.todos);
  } catch (error) {
    console.log(error);
  }
};

  return (

    <div className="todo-form">

      <input
        type="text"
        placeholder="Enter a task..."
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
        onKeyDown={(e) =>{
          if(e.key === 'Enter'){
            
            handleClick(e);
          }
        }}
      />

      <button onClick={handleClick}>Add</button>

    </div>

  );

}

export default TodoForm;