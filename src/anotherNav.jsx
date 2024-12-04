import { useState } from "react";
import {  FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [user, setuser] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  const loginuser = JSON.parse(localStorage.getItem("logininfo"));
  const registeruser = JSON.parse(localStorage.getItem("registerinfo"));
   const Navigate=useNavigate()
  const clearlocalstorage = () => {
    localStorage.clear("logininfo");
    localStorage.clear("registerinfo");
  };

  function clearCookie(name) {
    document.cookie =
      name[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      name[1] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  const [open, setopen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-[1400px] relative mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <span className="text-2xl font-bold text-gray-800">MyLogo</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className={open?`flex flex-col md:justify-between items-center  md:flex-row w-[50vw] md:w-fit h-[70vh] md:h-fit top-12 md:top-auto right-0 bg-white absolute  md:static space-x-4 z-10 shadow-lg md:shadow-none `:"hidden md:flex md:justify-between md:gap-7"}>
            <Link to="/allproperty">
              {" "}
              <span className="text-gray-800 hover:text-gray-600">
                Our property
              </span>
            </Link>
            <Link to={"/about"}>
              {" "}
              <span className="text-gray-800 hover:text-gray-600">About</span>
            </Link>
            <a href="#contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </a>
           
            {/* login  Button  and profile */}
            {registeruser||loginuser ? (
              <div
                className= " flex md:flex gap-2 items-center cursor-pointer relative"
                onClick={() => setdropdown(!dropdown)}
              >
                <img
                  src={registeruser?registeruser?.profileImg:loginuser?.profileImg||"./image/bg-img-feature.png"}
                  className="w-9 h-9 rounded-full"
                ></img>
                <span className="inline-block">{registeruser?  registeruser?.firstname+" "+registeruser?.lastname:loginuser?.firstname+" "+loginuser.lastname}</span>
                {dropdown && (
                  <div className="absolute top-8 p-2 bg-gray-400 rounded text-white font-bold z-10">
                    <ul className="">
                      <Link to={"/addproperty"}>
                     
                        {registeruser?.isAdmin||loginuser?.isAdmin?<li className="text-center text-xs  ">Add property</li>:null}
                      </Link>
                      <Link to={"/manageproperty"}>
                        {registeruser?.isAdmin||loginuser?.isAdmin?<li className="text-center text-xs">
                          Manage properites
                        </li>:null}
                      </Link>
                      <Link to={"/addadmin"}>
                        {" "}
                       { registeruser?.isAdmin||loginuser?.isAdmin?<li className="text-center text-xs">Add Admin</li>:null}
                      </Link>
                      <li className="text-center text-xs" onClick={() => [clearlocalstorage(),Navigate("/"),clearCookie(["logincookie","register"])]}>Logout</li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:block">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Link to={"/login"}> Login</Link>
                </button>
              </div>
            )}
          </div>

          {/* Hamburger menu (for small screens) */}
          {open?<span className= " text-3xl md:hidden" onClick={()=>setopen(!open)}><FaXmark></FaXmark></span>:<div className="md:hidden">
            <button className="text-gray-800 focus:outline-none" onClick={()=>setopen(!open)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
