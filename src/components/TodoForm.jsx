import { useState } from "react";
import axios from "axios";
function TodoForm({user}) {

  const [tasks, setTasks] = useState('');

 async function handleClick(e){
    e.preventDefault();

    if(!tasks.trim()) return;

  try{
    const response = await axios.post('http://localhost:3000/user/todo',{
      user_id: user.id,
      tasks
    });

    console.log(response.data);
    setTasks('');
  }catch(error){
    console.log(error);
  }

  }

  return (

    <div className="todo-form">

      <input
        type="text"
        placeholder="Enter a task..."
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
      />

      <button onClick={handleClick}>Add</button>

    </div>

  );

}

export default TodoForm;