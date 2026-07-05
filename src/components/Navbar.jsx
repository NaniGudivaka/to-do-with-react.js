

function Navbar({ user, setUser }) {

    function handleLogout(){
       
        setUser('');
    }



    return (

        <div className="navbar">

            <h2>Hello, {user.name} 👋</h2>

            <button className="user-btn" onClick={handleLogout}>
                Logout
            </button>

        </div>

    );

}

export default Navbar;