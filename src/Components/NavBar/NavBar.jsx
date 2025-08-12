import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import shoppingCart from '../../assets/shopping-cart.png';
import love from '../../assets/love.png';
import { CartContext, WishlistContext } from "../Root/Root";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const { wCart } = useContext(WishlistContext);

  return (
    <div className="navbar bg-base-100">
      {/* Navbar Middle */}
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>

      {/* Navbar Left */}
      <div className="navbar-start">
        <ul className="menu menu-horizontal hidden lg:flex gap-4">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Statistics">Statistics</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>

      {/* Navbar Right */}
      <div className="navbar-end flex gap-4">
        {/* Cart Button with count */}
        <button className="relative bg-white rounded-full p-2 hidden lg:block">
          <img className="w-6" src={shoppingCart} alt="Shopping Cart" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              {cart.length}
            </span>
          )}
        </button>

        {/* Wishlist Button with count */}
        <button className="relative bg-white rounded-full p-2 hidden lg:block">
          <img className="w-6" src={love} alt="Favorites" />
          {wCart.length > 0 && (
            <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">
              {wCart.length}
            </span>
          )}
        </button>

        <li className="list-none">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "btn bg-slate-800 text-white"
                : "btn hover:bg-slate-800 hover:text-white"
            }
          >
            Login
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default NavBar;
