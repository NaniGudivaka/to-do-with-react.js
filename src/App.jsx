


import { useState } from "react";
import Navbar from "./components/Navbar";
import UserModal from "./components/UserModal";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import TodoItem from "./components/TodoItem";
import "./App.css";


function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">

      {!user ? (
        <UserModal setUser={setUser} />
      ) : (
        <>
          <Navbar user={user} setUser={setUser} />
          <TodoForm user={user} todos={todos}
            setTodos={setTodos} />
          <TodoList todos={todos} />

        </>
      )}

    </div>
  );
}

export default App;


