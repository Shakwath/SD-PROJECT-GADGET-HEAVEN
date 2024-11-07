import { NavLink } from "react-router-dom";
import Cart from '../../assets/card.png'
import favourite from '../../assets/favourite.png'


const NavBar = () => {

    const links = <>
   <li><NavLink to="/">Home</NavLink></li>
    <li><a>Statistics</a></li>
    <li><a>Dashboard</a></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <button className="bg-white rounded-full p-2">
         <img className="w-6" src={Cart}/>
    </button>

    <button className="bg-white rounded-full p-2">
         <img className="w-6" src={favourite}/>
    </button>
  </div>
</div>
    );
};

export default NavBar;