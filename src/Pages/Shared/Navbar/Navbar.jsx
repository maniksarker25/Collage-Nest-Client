import { Link, NavLink, Navigate } from "react-router-dom";
import { authContext } from "../../../Providers/AuthProvider";
import { useContext, useState } from "react";
import LoadingSpiner from "../../../components/LoadingSpiner";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { user, loading, logOut } = useContext(authContext);
  const [searchCollage, setSearchCollage] = useState([]);
  console.log(searchCollage)

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  //  console.log(searchCollage.collegeName)
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  // search
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const collageName = form.collageName.value;
    fetch(`http://localhost:5000/collage/${collageName}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchCollage(data);
      });
  };

  if (loading) {
    return <LoadingSpiner />;
  }
  const navItems = (
    // navs items
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/collages"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>Collages</li>
      </NavLink>
      <NavLink
        to="/admission"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>Admission</li>
      </NavLink>
      <NavLink
        to="myCollage"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>My Collage</li>
      </NavLink>
    </>
  );
  return (
    <div>
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
          <div>
            <div className="flex items-center gap-4  ">
              {/* <img className=" h-10 w-10 lg:w-20 lg:mt-1 lg:h-20" src={logo} alt="" /> */}
              <h3 className="lg:text-2xl md:flex hidden   font-semibold">
                Collage <span className="text-blue-400">Nest</span>
              </h3>
              <form onSubmit={handleSearch}>
                <div className="flex gap-2">
                  <input
                    name="collageName"
                    className="px-2 py-2 w-full rounded-md"
                    type="text"
                    placeholder="Search Collage"
                  />
                  <button onClick={openModal} type="submit">
                    {" "}
                    <FaSearch className="text-3xl  text-blue-400"></FaSearch>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu space-x-8 menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            "Loading"
          ) : user ? (
            <>
              <Link to="/profileInformation">
                {" "}
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
              </Link>
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
      {/* <div className="max-w-screen-xl mx-auto">
            <img src={searchCollage.collegeImage} alt="" />
            kdfkdhhf
      </div> */}
      {isOpen && (
        <div className="fixed inset-0  flex items-center justify-center z-30 shadow-xl">
          <div className="absolute px-8 md:px-16 bg-[#F3F3F3] lg:w-2/5 p-6 rounded-lg">
            {
              searchCollage.length < 1 ?<h2 className="text-3xl font-bold py-8">
                Not Collage Match 
              </h2>:<div>
              <div className="card w-full mx-auto ">
                <figure>
                  <img className="w-full h-64"
                    src={searchCollage[0]?.collegeImage}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{searchCollage[0]?.collegeName}</h2>

                  <p>Admission Date: {searchCollage[0].admissionDates.fall +
                  " to " +
                  searchCollage[0].admissionDates.spring}</p>
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl font-bold">Events</h4>
                  {searchCollage[0]?.events.map((event, i) => (
                    <li key={i}>{event}</li>
                  ))}
                </div>
                <div className="">
                    <h4 className="text-xl font-bold">Sports</h4>
                    {
                        searchCollage[0]?.sports.map((sport,i)=><li key={i}>{sport}</li>)
                    }
                </div>
              </div>
                </div>
              </div>
            </div>
            }
           
           <div className="ml-auto flex justify-end"> <button onClick={closeModal} className="bg-red-500 py-2 px-4 rounded  ">Cancel</button></div>
         
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
