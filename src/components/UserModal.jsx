import { useState } from "react";
import axios from "axios";

function UserModal({ setUser }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;

    setLoading(true);

    try {

      const response = await axios.post('https://todo-backend-with-node-js-mysql.onrender.com/auth/continue', {
        name,
        email,
      });
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);

    } catch (error) {

      console.log(error);

    }finally{
      setLoading(false);
    }
  };

  return (

    <div className="modal">

      <h1>Welcome 👋</h1>

      <p>Please Enter Your Details</p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>{loading ? 'Please wait...' : 'Continue'}</button>

      </form>

      <p>
        <strong>🚧 **This project is under active development. Most core features have been implemented. The backend deployment is currently being finalized, so some functionality may be temporarily unavailable. Feel free to explore the application and check back for future updates!**</strong>
      </p>


    </div>

  );

}

export default UserModal;