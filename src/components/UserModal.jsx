import { useState } from "react";
import axios from "axios";

function UserModal({ setUser }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;

   try{

    const response = await axios.post('http://localhost:3000/auth/continue',{
      name,
      email,
    });
    console.log(response.data);
    setUser(response.data.user);

   }catch(error){

    console.log(error);

   }
  };

  return (

    <div className="modal">

      <h1>Welcome 👋</h1>

      <p>Enter your name</p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button>Continue</button>

      </form>

    </div>

  );

}

export default UserModal;