


import { useState } from "react";
import Navbar from "./components/Navbar";
import UserModal from "./components/UserModal";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import TodoItem from "./components/TodoItem";
import "./App.css";


function App() {

  const [user, setUser] = useState("");

  return (
    <div className="container">

      {!user ? (
        <UserModal setUser={setUser}/>
      ) : (
        <>
          <Navbar user={user} />
          <TodoForm />
          <TodoList />
          
        </>
      )}

    </div>
  );
}

export default App;


