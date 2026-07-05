


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

  const [user, setUser] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
  if (!user) return;

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/user/users/${user.id}`
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
            setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos}/>

        </>
      )}

    </div>
  );
}

export default App;


