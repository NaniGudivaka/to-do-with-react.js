import { useState } from "react";

function UserModal({ setUser }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    // Backend API later
    setUser(name);
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