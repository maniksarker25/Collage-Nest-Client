import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo/carToyExpress.png";

const Navbar = () => {
  //   const { user, loading,logOut } = useContext(authContext);
  // console.log(user, loading);

  //   const handleLogOut = ()=>{
  //     logOut()
  //     .then(()=>{})
  //     .catch(()=>{})
  //   }

  //   if(loading){
  //     return <LoadingSpiner/>
  //   }
  const user = false;
  const loading = false;
  const navItems = (
    // nave items
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/allToys"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>Collages</li>
      </NavLink>
      <NavLink
        to="blog"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>Admission</li>
      </NavLink>
      <NavLink
        to="myToy"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>My Collage</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar max-w-screen-xl  mx-auto bg-[#E3E6E6]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact space-y-2 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center ">
            {/* <img className=" h-10 w-10 lg:w-20 lg:mt-1 lg:h-20" src={logo} alt="" /> */}
            <h3 className="lg:text-2xl  font-semibold">CollageNest</h3>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-8 menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          "Loading"
        ) : user ? (
          <>
            {user.photoURL ? (
              <img
                title={user?.displayName}
                className="w-8 h-8 rounded-full mr-4 cursor-pointer"
                src={user?.photoURL}
              ></img>
            ) : (
              <img
                title={user?.displayName}
                className="w-10 mr-2 cursor-pointer rounded-full"
                src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000"
              ></img>
            )}
            <button onClick={handleLogOut} className="primary-btn">
              LogOut
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="primary-btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
