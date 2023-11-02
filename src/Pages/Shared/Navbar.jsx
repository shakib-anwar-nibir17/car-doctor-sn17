import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li className="mr-2">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-custom-color text-white"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-custom-color text-white"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          About
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-custom-color text-white"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          Services
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-custom-color text-white"
              : " hover:border-custom-color hover:border hover:bg-white"
          }
        >
          Blog
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li className="mr-2">
            <NavLink
              to="/my_booking"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-custom-color text-white"
                  : " hover:border-custom-color hover:border hover:bg-white"
              }
            >
              MyBooking
            </NavLink>
          </li>
          <li className="mr-2">
            <Link>
              <button onClick={handleLogOut} className="bg-white">
                Logout
              </button>
            </Link>
          </li>
        </>
      ) : (
        <li className="mr-2">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-custom-color text-white"
                : " hover:border-custom-color hover:border hover-bg-white"
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
