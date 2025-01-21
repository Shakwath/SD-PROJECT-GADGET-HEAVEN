import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import shoppingCart from '../../assets/shopping-cart.png';
import love from '../../assets/love.png';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const links = (
  <nav className="flex flex-row justify-between items-center">
  <div className="flex items-start">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/Statistics">Statistics</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </div>
   <div className="items-end">
    <li><NavLink to="/login">Login</NavLink></li>
   </div>
  </nav>
  );

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleForm = () => setIsSignup(!isSignup);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>

      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex gap-4">
        <button className="bg-white rounded-full p-2">
          <img className="w-6" src={shoppingCart} alt="Shopping Cart" />
        </button>

        <button className="bg-white rounded-full p-2">
          <img className="w-6" src={love} alt="Favorites" />
        </button>

        {/* Login/Signup Button */}
        {/* <button className="btn" onClick={toggleModal}> Login</button> */}
      </div>

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="w-full h-screen fixed top-0 left-0 z-50 bg-[#00000080] flex items-center justify-center">
          <div className="w-[100%] md:w-[60%] lg:w-[30%] bg-white rounded-lg p-6">
            <div className="w-full flex justify-end">
              <button className="text-xl" onClick={toggleModal}>x</button>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4">{isSignup ? 'Sign Up' : 'Login'}</h2>

              {isSignup ? (
                <>
                  <input className="input input-bordered mb-4" type="text" placeholder="Username" />
                  <input className="input input-bordered mb-4" type="email" placeholder="Email" />
                  <input className="input input-bordered mb-4" type="password" placeholder="Password" />
                  <button className="btn btn-primary bg-blue-600 w-[60%]">Sign Up</button>
                </>
              ) : (
                <>
                  <input className="input input-bordered mb-4" type="email" placeholder="Email" />
                  <input className="input input-bordered mb-4" type="password" placeholder="Password" />
                  <button className="btn btn-primary bg-blue-600 w-[60%]">Login</button>
                </>
              )}

              <p className="mt-4">
                {isSignup ? 'Already have an account? ' : 'Don’t have an account? '}
                <button className="text-[#828dc7]" onClick={toggleForm}>
                  {isSignup ? 'Login' : 'Sign Up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default NavBar;
