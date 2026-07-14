import { useState } from "react";
import axios from "axios";
function TodoForm({user, setTodos}) {

  const [tasks, setTasks] = useState('');
  const [loading, setLoading] = useState(false);

 async function handleClick(e){
    e.preventDefault();

    if(tasks.length > 500){
      alert('Task cannot exceed 500 characters');
      return;
    }

    if(loading) return;

    if(!tasks.trim()) return;

    setLoading(true);

  try{
    const response = await axios.post('https://todo-backend-with-node-js-mysql.onrender.com/user/todo',{
      user_id: user.id,
      tasks
    });

    console.log(response.data);
    await fetchTodos();
    setTasks('');


  }catch(error){
    alert(
      error.response?.dat?.message || 'Something went wrong'
    );
    console.log(error);
  }finally{
    setLoading(false);
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

      <button onClick={handleClick} disabled={loading || !tasks.trim()}>{loading ? 'Adding...' : 'Add'}</button>

    </div>

  );

}

export default TodoForm;