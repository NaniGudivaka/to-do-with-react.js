


import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import UserModal from "./components/UserModal";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import TodoItem from "./components/TodoItem";
import axios from "axios";
import "./App.css";


function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingTask, setEditingTask] = useState("");

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    if (!user) return;

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

    fetchTodos();
  }, [user]);

  return (
    <div className="container">

      {!user ? (
        <UserModal setUser={setUser} />
      ) : (
        <>
          <Navbar user={user} setUser={setUser} />
          
          <TodoForm user={user}
            setTodos={setTodos} 
            editingId={editingId}
            setEditingId={setEditingId}
            editingTask={editingTask}
            setEditingTask={setEditingTask}/>

          <TodoList todos={todos} setTodos={setTodos} setEditingId={setEditingId} setEditingTask={setEditingTask}/>

          <p>🚧 Work in Progress

            This Todo application is currently under active development. Features such as task completion, task editing enhancements, and other improvements are being implemented. Thank you for checking out the project!</p>

        </>
      )}

    </div>
  );
}

export default App;


