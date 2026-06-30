

function Navbar({ user }) {

    return (

        <div className="navbar">

            <h2>Hello, {user} 👋</h2>

            <button className="user-btn">
                Logout
            </button>

        </div>

    );

}

export default Navbar;